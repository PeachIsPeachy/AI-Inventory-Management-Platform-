"use client";

import { useCallback, useMemo, useState } from "react";
import { companyCategories } from "@/components/navbar/Categories";
import { Container } from "@mui/system";
import { SafeInterview, SafeInterviewWithUser, SafeJobPosition, SafeUser } from "@/types";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Tab, ThemeProvider, createTheme } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { format } from "date-fns";
import { BsCalendarDateFill } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";
import { FaMoneyBill } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import Image from "next/image";
import useCountries from "@/hooks/useCountries";
import { HiUsers } from "react-icons/hi2";
import { MdBusinessCenter } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";
import CompanyInterview from "@/components/companies/CompanyInterview";

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(33, 43, 54)',
    },
  },
});

interface CompanyClientProps {
  currentUser?: SafeUser | null;
  jobPosition: SafeJobPosition;
  interviews: SafeInterviewWithUser[]
}

const JobPositionClient: React.FC<CompanyClientProps> = ({
  currentUser,
  jobPosition,
  interviews,
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const { getByValue } = useCountries();

  const filteredInterviews = interviews.filter(interview => interview.jobPositionId === jobPosition.id);
  
  const location = getByValue(jobPosition.company.locationValue)

  const [isLoading, setIsLoading] = useState(false);
  const [interviewDate, setInterviewDate] = useState<Date>(new Date('2022-05-10'));

  const onCreateInterview = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    setIsLoading(true);

    axios
      .post("/api/interviews", {
        interviewDate: interviewDate,
        companyId: jobPosition.company?.id,
        jobPositionId: jobPosition.id,
      })
      .then(() => {
        toast.success("Interview booked!");
        setInterviewDate(interviewDate);

      router.refresh()
    })
    .catch((error) => {
      console.log(error)
      toast.error(error.response.data.error)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [interviewDate, jobPosition.company.id, router, currentUser, loginModal])

  const type = useMemo(() => {
    return companyCategories.find((item) => item.label === jobPosition.type);
  }, [jobPosition.type]);

  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const gridColumns = 12
  const gridColumnSpacing = "24px"
  const gridRowSpacing = "24px"

  return (
    <Container>
      <div
        style={{
          paddingLeft: '24px',
          paddingRight: '24px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxSizing: 'border-box',
          display: 'block',
        }}
      >
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <TabList onChange={handleChange} indicatorColor="primary">
            <Tab
              value="1"
              label='Job Content'
              sx={{
                textTransform: "unset",
                color: "rgb(99, 115, 129)",
                "&.Mui-selected": {
                  color: "rgb(33, 43, 54)",
                  borderBottomColor: "rgb(33, 43, 54)",
                },
              }}
              disableRipple
            />
            <Tab
              value="2"
              label={
                <div className="flex gap-2">
                  <div className="flex flex-col justify-center">
                    Candidates
                  </div>
                  <div 
                    style={{
                      backgroundColor: "rgb(33, 43, 54)",
                      color: "rgb(255, 255, 255)",
                      fontWeight: "700",
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: "6px",
                      minWidth: "24px",
                      height: "24px",
                      paddingTop: "3px",
                      paddingLeft: "6px",
                      paddingRight: "6px"
                    }}
                  >
                    {jobPosition.Interview.length}
                  </div>
                </div>
              }
              sx={{
                textTransform: "unset",
                color: "rgb(99, 115, 129)",
                "&.Mui-selected": {
                  color: "rgb(33, 43, 54)",
                  borderBottomColor: "rgb(33, 43, 54)",
                },
              }}
              disableRipple
            />
          </TabList>
          <TabPanel value="1">
            <div
              className="xl:flex md:block"
              style={{
                minWidth: '0px',
                boxSizing: 'border-box',
                margin: `calc(${gridRowSpacing} / -2) calc(${gridColumnSpacing} / -2)`            
              }}
            >
              <div
                className="md:w-full xl:w-[900px] mb-10"
                style={{
                  WebkitBoxFlex: '0',
                  flexGrow: '0',
                  flexBasis: 'auto',
                  padding: `calc(${gridRowSpacing} / 2) calc(${gridColumnSpacing} / 2)`,
                }}
              >
                <div
                  style={{
                    color: "rgb(33, 43, 54)",
                    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    padding: "24px",
                    minHeight: "500px"
                  }}
                > 
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      lineHeight: "1.5",
                    }}
                  >
                    {jobPosition.title}
                  </div>
                  <div>
                    <h6
                      style={{
                        fontWeight: "700"
                      }}
                    >
                      Job Description
                    </h6>
                    <br />
                    <p>
                      {jobPosition.description}
                    </p>
                    <br />       
                    <h6
                      style={{
                        fontWeight: "700"
                      }}
                    >
                      Key Responsibilities
                    </h6>
                    <br />
                    <ul>
                      {jobPosition.responsibilities.map((string) => (
                        <li style={{lineHeight: "2"}}>
                          • {string}
                        </li>
                      ))}
                    </ul> 
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px"
                    }}
                  >
                    <h6
                      style={{
                        fontWeight: "700"
                      }}
                    >
                        Skills
                    </h6>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "8px",
                        alignItems: "center"
                      }}
                    >
                      {jobPosition.skills.map((skill) => (
                        <div
                          style={{
                            maxWidth: '100%',
                            fontFamily: '"Public Sans", sans-serif',
                            fontSize: '0.8125rem',
                            display: 'inline-flex',
                            WebkitBoxAlign: 'center',
                            alignItems: 'center',
                            WebkitBoxPack: 'center',
                            justifyContent: 'center',
                            height: '32px',
                            whiteSpace: 'nowrap',
                            transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                            cursor: 'unset',
                            outline: '0px',
                            textDecoration: 'none',
                            border: '0px',
                            padding: '0px',
                            verticalAlign: 'middle',
                            boxSizing: 'border-box',
                            color: 'rgb(33, 43, 54)',
                            backgroundColor: 'rgba(145, 158, 171, 0.16)',
                            fontWeight: '600',
                            borderRadius: '8px',                            
                          }}
                        >
                          <span
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              paddingLeft: "12px",
                              paddingRight: "12px",
                              whiteSpace: "nowrap"
                            }}
                          >
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
              <div
                className="md:w-full xl:w-[400px]"
                style={{
                  WebkitBoxFlex: '0',
                  flexGrow: '0',
                  flexBasis: 'auto',
                  padding: `calc(${gridRowSpacing} / 2) calc(${gridColumnSpacing} / 2)`
                }}
              >
                <div
                  style={{
                    color: "rgb(33, 43, 54)",
                    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    padding: "24px"
                  }}
                > 
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "12px",
                    }}
                  >
                    <BsCalendarDateFill
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <div
                      style={{
                        flex: "1 1 auto",
                        minWidth: "0px",
                        margin: "0px"
                      }}
                    >
                      <span
                        style={{
                          margin: "0px 0px 4px",
                          display: "block",
                          lineHeight: "1.57143",
                          fontSize: "0.875rem",
                          color: "rgb(99, 115, 129)"
                        }}
                      >
                        Date posted
                      </span>
                      <span
                        style={{
                          margin: "0px",
                          color: "rgb(33, 43, 54)",
                          display: "block",
                          fontWeight: "700",
                          lineHeight: "1.57143",
                          fontSize: "0.875rem",

                        }}
                      >
                        {format(Date.parse(jobPosition.createdAt), "MMM do yyyy")}
                      </span>
                    </div>
                    
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "12px",
                    }}
                  >
                    <GoClockFill
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <div
                      style={{
                        flex: "1 1 auto",
                        minWidth: "0px",
                        margin: "0px"
                      }}
                    >
                      <span
                        style={{
                          margin: "0px 0px 4px",
                          display: "block",
                          lineHeight: "1.57143",
                          fontSize: "0.875rem",
                          color: "rgb(99, 115, 129)"
                        }}
                      >
                        Employment type
                      </span>
                      <span
                        style={{
                          margin: "0px",
                          color: "rgb(33, 43, 54)",
                          display: "block",
                          fontWeight: "700",
                          lineHeight: "1.57143",
                          fontSize: "0.875rem",

                        }}
                      >
                        {jobPosition.type}
                      </span>
                    </div>
                    
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "12px",
                    }}
                  >
                    <FaMoneyBill
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <div
                      style={{
                        flex: "1 1 auto",
                        minWidth: "0px",
                        margin: "0px"
                      }}
                    >
                      <span
                        style={{
                          margin: "0px 0px 4px",
                          display: "block",
                          lineHeight: "1.57143",
                          fontSize: "0.875rem",
                          color: "rgb(99, 115, 129)"
                        }}
                      >
                        Offered salary
                      </span>
                      <span
                        style={{
                          margin: "0px",
                          color: "rgb(33, 43, 54)",
                          display: "block",
                          fontWeight: "700",
                          lineHeight: "1.57143",
                          fontSize: "0.875rem",

                        }}
                      >
                        {jobPosition.salary}
                      </span>
                    </div>
                    
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "12px",
                    }}
                  >
                    <GiStairsGoal
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <div
                      style={{
                        flex: "1 1 auto",
                        minWidth: "0px",
                        margin: "0px"
                      }}
                    >
                      <span
                        style={{
                          margin: "0px 0px 4px",
                          display: "block",
                          lineHeight: "1.57143",
                          fontSize: "0.875rem",
                          color: "rgb(99, 115, 129)"
                        }}
                      >
                        Experience
                      </span>
                      <span
                        style={{
                          margin: "0px",
                          color: "rgb(33, 43, 54)",
                          display: "block",
                          fontWeight: "700",
                          lineHeight: "1.57143",
                          fontSize: "0.875rem",

                        }}
                      >
                        {jobPosition.experience}
                      </span>
                    </div>
                    
                  </div>
                </div>
                <div
                  style={{
                    color: "rgb(33, 43, 54)",
                    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
                    border: "1px solid rgba(145, 158, 171, 0.16)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: "24px",
                    borderRadius: "16px",
                    marginTop: "24px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      height: "64px",
                      width: "64px",
                      backgroundColor: "white",
                      marginBottom: "16px",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: "0",
                    }}
                  >
                    <Image
                      width={64}
                      height={64}
                      objectFit="cover"
                      src={jobPosition.company.imageSrc}
                      alt={jobPosition.company.name}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <h6
                      style={{
                        margin: "0px",
                        fontWeight: "700",
                        lineHeight: "1.5",
                        fontSize: "1rem",
                      }}
                    >
                      {jobPosition.company.name}
                    </h6>
                    <p
                      style={{
                        margin: "0px",
                        lineHeight: "1.57143",
                        fontSize: "0.875",
                      }}
                    >
                      {jobPosition.company.address}, {location?.region}, {location?.label}
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        lineHeight: "1.57143",
                        fontSize: "0.875",
                      }}
                    >
                      {jobPosition.company.tel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <CompanyInterview 
                onChangeDate={(value) => setInterviewDate(value)}
                interviewDate={interviewDate}
                onSubmit={onCreateInterview}
                disabled={isLoading}
              />
          </TabPanel>
          <TabPanel value="2">
            <div
              className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
                gap-10
              "
            >
              {
                filteredInterviews.map((interview) => (
                  <div
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
                          src={interview.user.image || '/img/placeholder.jpg'}
                          alt={"profilepicture"}
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
                          {interview.user.name}
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
                          Interview date: {format(Date.parse(interview.interviewDate), "MMM do yyyy")}
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
                            Potential Candidate
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
                          {jobPosition.experience}
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
                          {jobPosition.type}
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
                          {jobPosition.salary}
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
                          {jobPosition.company.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
      </div>
    </Container>
  );
};

export default JobPositionClient;
