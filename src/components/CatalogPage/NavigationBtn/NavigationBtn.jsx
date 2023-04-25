import { useTransition, useState } from 'react';
const NavigationBtn=({ children, isActive, onClick })=>{
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b className='activeTab' style={{backgroundColor:"#FB472E", color:"#fff", fontWeight:"800", pointerEvents:"none"}}>{children}</b>
  }
  if (isPending) {
    return <b className="pendingTab">{children}</b>;
  }
  return (
    <div className="tabSection" onClick={() => {
      startTransition(() => {
        onClick();
      });
    }}>
      {children}
    </div>
  );
}
export default NavigationBtn;