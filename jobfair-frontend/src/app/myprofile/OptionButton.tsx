'use client'

import { SafeInterview } from "@/types";
import { useCallback } from "react";
interface DeleteButtonProps {
  onOpen?:()=>void;
  onAction?: (id: string) => void;
  onUpdate?:(interview:SafeInterview)=>void;
  actionId: string,
  label?: string,
  action?: string,
  interview: SafeInterview,
}

const OptionButton: React.FC<DeleteButtonProps> = ({
  onAction,
  actionId,
  label,
  action,
  onUpdate,
  interview,
  onOpen
}) => {
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (action === "delete") {
        onAction?.(actionId)
      }
      if (action === "update") {
        onOpen?.();
        onUpdate?.(interview);
      }

    }, [onAction, actionId]);

  return (
    <button onClick={handleCancel}
      className={"inline-flex sm:px-1 items-center m-1 px-2 py-1 bg-white transition ease-in-out delay-20 text-sm font-medium flex  " +
        (action === "update"
          ? "hover:bg-sky-100 text-sky-500 ring-sky-500 ring-inset-1 ring-2 rounded-md"
          : "hover:bg-rose-100 text-red-600 ring-red-600 ring-inset-1 rounded-md ring-2")
      }

    >
      {
        action === "delete"?
        <svg className="h-8 w-8 text-rose-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg> : ""
      }
      {
        action == "update" ? <svg className="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="12" y1="11" x2="12" y2="17" />  <polyline points="9 14 12 17 15 14" /></svg> : ""
      }
      
      {label}
    </button>

  )
};

export default OptionButton;