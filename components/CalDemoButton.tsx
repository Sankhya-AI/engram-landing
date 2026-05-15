import React, { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

const calNamespace = 'dhee-demo';
const calLink = 'ashish-dwivedi-qy9pzx/dhee-demo';
const calConfig = { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' };

type CalDemoButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CalDemoButton: React.FC<CalDemoButtonProps> = ({
  children = 'Book a demo',
  type = 'button',
  ...props
}) => {
  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi({ namespace: calNamespace });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <button
      {...props}
      type={type}
      data-cal-namespace={calNamespace}
      data-cal-link={calLink}
      data-cal-config={JSON.stringify(calConfig)}
    >
      {children}
    </button>
  );
};
