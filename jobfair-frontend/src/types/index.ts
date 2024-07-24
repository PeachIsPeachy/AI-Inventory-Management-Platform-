import { User, Interview, Company, JobPosition, Review } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified" 
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafeInterview = Omit<
  Interview,
  "createdAt" | "interviewDate" | "updatedAt" | "company"
> & {
  createdAt: string;
  interviewDate: string;
  updatedAt: string;
  company: SafeCompany;
};

export type SafeInterviewWithUser = Omit<
  Interview,
  "createdAt" | "interviewDate" | "updatedAt" | "company" | "user"
> & {
  createdAt: string;
  interviewDate: string;
  updatedAt: string;
  company: SafeCompany;
  user: SafeUser;
};

export type SafeInterviewWithoutCompany = Omit<
  Interview,
  "createdAt" | "interviewDate" | "updatedAt"
> & {
  createdAt: string;
  interviewDate: string;
  updatedAt: string;
};

export type SafeCompany = Omit<Company, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeJobPosition = Omit<
  JobPosition,
  "createdAt" | "updatedAt" | "company" | "Interview"
> & {
  createdAt: string;
  updatedAt: string;
  company: SafeCompany;
  Interview: SafeInterviewWithoutCompany[];
};

export type SafeJobPositionWithoutInterview = Omit<
  JobPosition,
  "createdAt" | "updatedAt" | "company"
> & {
  createdAt: string;
  updatedAt: string;
  company: SafeCompany;
};

export type SafeReview = Omit<
  Review,
  "createdAt" | "updatedAt" | "company" | "user"
> & {
  createdAt: string;
  updatedAt: string;
  company: SafeCompany;
  user: SafeUser;
};
