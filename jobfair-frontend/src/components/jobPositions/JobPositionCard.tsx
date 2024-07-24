"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import { MdLocationPin } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";
import { MdBusinessCenter } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";

import { SafeInterview, SafeJobPosition, SafeUser } from "@/types";
import { Avatar } from "@mui/material";
import { HiUsers } from "react-icons/hi2";

interface JobPositionCardProps {
  data: SafeJobPosition;
  interviews?: SafeInterview[];
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const JobPositionCard: React.FC<JobPositionCardProps> = ({
  data,
  interviews,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const interviewCount = useMemo(() => {
    if (!interviews) {
      return 0;
    }
    
    return interviews.filter((interview) => interview.jobPositionId === data.id).length;
  }, [interviews, data.id]);

  return (
    <div
      onClick={() => router.push(`/jobs/${data.id}`)}
      style={{
        backgroundColor: "white",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        overflow: "hidden",
        position: "relative",
        borderRadius: "16px",
      }}
      className="shadow-md hover:shadow-xl cursor-pointer"
    >
      <div 
        className="
          flex 
          flex-col
          rounded-xl 
          pt-[24px] 
          pr-[24px] 
          pl-[24px] 
          pb-[16px]
        "
      >
        <div
          style={{
            borderRadius: "12px",
            height: "48px",
            width: "48px",
            backgroundColor: "white",
            marginBottom: "16px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            width={48}
            height={48}
            objectFit="cover"
            src={data.company.imageSrc}
            alt={data.company.name}
          />
        </div>
        <div
          style={{
            flex: "1 1 auto",
            minWidth: "0px",
            margin: "0px 0px 8px"
          }}
        >
          <div
            style={{
              margin: "0px",
              display: "block",
              fontWeight: "600",
              lineHeight: "1.5",
              fontSize: "1rem"
            }}
          >
            {data.title}
          </div>
          <div
            style={{
              margin: "8px 0px 0px",
              color: "rgb(145, 158, 171)",
              display: "block",
              lineHeight: "1.5",
              fontSize: "0.75rem",
              fontWeight: "400",
            }}
          >
            Posted date: {format(Date.parse(data.createdAt), "MMM do yyyy")}
          </div>
        </div>
        <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "4px",
              alignItems: "center",
              color: "rgb(0, 167, 111)",
            }}
          >
            <HiUsers 
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <div
              style={{
                fontWeight: "700",
                fontSize: "0.75rem",
                lineHeight: "1.5",
                paddingTop: "2px"
              }}
            >
              {interviewCount} {interviewCount === 1 ? "Candidate" : "Candidates"}
            </div>
        </div>
      </div>
      <hr 
        style={{
          margin: "0px",
          borderWidth: "0px 0px thin",
          borderColor: "rgba(145, 158, 171, 0.2)",
          borderStyle: "dashed"
        }}
      />
      <div
        style={{
          rowGap: "12px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          padding: "24px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
            color: "rgb(145, 158, 171)",
            minWidth: "0px"
          }}
        >
          <GiStairsGoal 
            style={{
              width: "16px",
              height: "16px",
              flexShrink: "0"
            }}
          />
          <div
            style={{
              margin: "0px",
              lineHeight: "1.5",
              fontSize: "0.75rem",
              fontWeight: "600",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginTop: "2px",
            }}
          >
            {data.experience}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
            color: "rgb(145, 158, 171)",
            minWidth: "0px"
          }}
        >
          <MdBusinessCenter 
            style={{
              width: "16px",
              height: "16px",
              flexShrink: "0"
            }}
          />
          <div
            style={{
              margin: "0px",
              lineHeight: "1.5",
              fontSize: "0.75rem",
              fontWeight: "600",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginTop: "2px",
            }}
          >
            {data.type}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
            color: "rgb(145, 158, 171)",
            minWidth: "0px"
          }}
        >
          <GiStairsGoal 
            style={{
              width: "16px",
              height: "16px",
              flexShrink: "0"
            }}
          />
          <div
            style={{
              margin: "0px",
              lineHeight: "1.5",
              fontSize: "0.75rem",
              fontWeight: "600",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginTop: "2px",
            }}
          >
            {data.salary}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
            color: "rgb(145, 158, 171)",
            minWidth: "0px"
          }}
        >
          <IoBusiness 
            style={{
              width: "16px",
              height: "16px",
              flexShrink: "0"
            }}
          />
          <div
            style={{
              margin: "0px",
              lineHeight: "1.5",
              fontSize: "0.75rem",
              fontWeight: "600",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginTop: "2px",
            }}
          >
            {data.company.name}
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobPositionCard;
