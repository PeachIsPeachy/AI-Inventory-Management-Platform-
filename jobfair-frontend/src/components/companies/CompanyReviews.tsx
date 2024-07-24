'use client';

import { SafeCompany, SafeReview, SafeUser } from "@/types";
import { Rating, Typography, Box, Stack, LinearProgress, Divider, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import { AiFillStar } from "react-icons/ai";
import { HiPencil } from "react-icons/hi2";

import Button from '@mui/joy/Button';
import { styled as styledComponents } from 'styled-components';
import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import useReviewModal from "@/hooks/useReviewModal";
import useLoginModal from "@/hooks/useLoginModal";

const GridContainer = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 0px;
  padding-bottom: 0px;

  @media (max-width: 899px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
      color: '#cad1d7'
    },
});

const StyledLinearProgress = styled(LinearProgress)({
    "& .MuiLinearProgress-barColorPrimary": {
        backgroundColor: "rgb(33, 43, 54)",
    },
})

interface CompanyReviewProps {
  reviews: SafeReview[]
  currentUser?: SafeUser | null
  company: SafeCompany
}

const CompanyReviews: React.FC<CompanyReviewProps> = ({
  reviews,
  currentUser,
  company,
}) => {
  const reviewModal = useReviewModal()
  const loginModal = useLoginModal()
  const [totalRating, setTotalRating] = useState(0);
  const [starRatings, setStarRatings] = useState([0, 0, 0, 0, 0])
  
  const onReview = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }

    reviewModal.onOpen()
  }, [currentUser, reviewModal])

  const ratings = [
    { label: '5 Star' },
    { label: '4 Star' },
    { label: '3 Star' },
    { label: '2 Star' },
    { label: '1 Star' },
  ];

  useEffect(() => {
    if (reviews) {
        let total = 0;
        const newStarRatings = [0, 0, 0, 0, 0]
        reviews.forEach((review) => {
            total += review.rating;
            newStarRatings[Math.abs(review.rating - 5)]++
        });
        setTotalRating(Math.round(((total/reviews.length) + Number.EPSILON) * 10) / 10);
        setStarRatings(newStarRatings)
    }
  }, [reviews]);


  return (
    <div
        style={{
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(33, 43, 54)",
            boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
            overflow: "hidden",
            position: "relative",
            borderRadius: "16px",
            zIndex: "0",
        }}
        className="col-span-7"
    > 
        <GridContainer 
            style={{
                boxSizing: "border-box",
                unicodeBidi: "isolate",
            }}
        >
            <Stack 
                className=""
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    WebkitBoxPack: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    unicodeBidi: "isolate",
                }}
            >
                <div 
                    style={{
                        margin: "0px",
                        fontWeight: "600",
                        lineHeight: "1.57143",
                        fontSize: "0.875rem",
                        fontFamily: "sans-serif",
                    }}
                >
                    Average rating
                </div>
                <div
                    style={{
                        fontSize: "2.75rem",
                        margin: "0px",
                        fontWeight: "800",
                        lineHeight: "1.33333",
                        fontFamily: "sans-serif",
                        boxSizing: "border-box"
                    }}
                >
                    {reviews.length === 0 ? "No Reviews" : `${totalRating}/5`}
                </div>
                <StyledRating
                    value={totalRating}
                    readOnly
                    icon={<AiFillStar 
                        style={{ flexShrink: 0 }}
                    />}
                    emptyIcon={<AiFillStar />}
                    precision={0.1}
                />
                <div
                    style={{
                        margin: "0px",
                        lineHeight: "1.5",
                        fontSize: "0.75rem",
                        fontFamily: "sans-serif",
                        fontWeight: "400",
                        color: "rgb(99, 115, 129)"
                    }}
                >
                    ({reviews.length} {reviews.length === 1 ? "review" : "reviews"})
                </div>
            </Stack>
            <Stack
                sx={{
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    borderLeft: {
                        xs: "0px dashed rgba(145, 158, 171, 0.2)",
                        md: "1px dashed rgba(145, 158, 171, 0.2)",
                    },
                    borderRight: {
                        xs: "0px dashed rgba(145, 158, 171, 0.2)",
                        md: "1px dashed rgba(145, 158, 171, 0.2)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    boxSizing: "border-box",
                }}
            >
                {ratings.map((rating, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                            boxSizing: "border-box"
                        }}
                    >
                        <div
                            style={{
                                margin: "0px",
                                fontWeight: "600",
                                lineHeight: "1.57143",
                                fontSize: "0.875rem",
                                fontFamily: "sans-serif",
                            }}
                        >
                            {rating.label}
                        </div>
                        <StyledLinearProgress 
                            variant="determinate"
                            value={reviews.length === 0 ? 0 : (starRatings[index] / reviews.length) * 100}
                            color="primary"
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            sx={{
                                position: "relative",
                                overflow: "hidden",
                                display: "block",
                                height: "4px",
                                zIndex: "0",
                                borderRadius: "4px",
                                marginLeft: "16px",
                                marginRight: "16px",
                                WebkitBoxFlex: "1",
                                flexGrow: "1",
                                backgroundColor: "#cad1d7"
                            }}  
                        />
                        <div
                            style={{
                                margin: "0px",
                                lineHeight: "1.57143",
                                fontSize: "0.875rem",
                                fontFamily: "sans-serif",
                                fontWeight: "400",
                                color: "rgb(99, 115, 129)",
                            }}
                        >
                            {starRatings[index]}
                        </div>
                    </div>
                ))}
            </Stack>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    WebkitBoxPack: "center",
                    justifyContent: "center",
                }}
            >
                <Button
                    variant="soft"
                    size="lg"
                    color="neutral"
                    sx={{
                        display: "inline-flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        WebkitBoxPack: "center",
                        justifyContent: "center",
                        position: "relative",
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        outline: "0px",
                        border: "0px currentcolor",
                        margin: "0px",
                        cursor: "pointer",
                        userSelect: "none",
                        verticalAlign: "middle",
                        appearance: "none",
                        textDecoration: "none",
                        fontWeight: "700",
                        lineHeight: "1.71429",
                        textTransform: "unset",
                        minWidth: "64px",
                        padding: "6px 16px",
                        borderRadius: "8px",
                        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        boxShadow: "none",
                        color: "rgb(33, 43, 54)",
                        backgroundColor: "rgba(145, 158, 171, 0.08)",
                        height: "48px",
                        fontSize: "15px",
                    }}
                    onClick={onReview}
                >
                    <div
                        style={{
                            display: "inherit",
                            fontFamily: "sans-serif",
                        }}
                    >
                        <HiPencil 
                            style={{
                                fontSize: "22px",
                                width: "20px",
                                height: "20px",
                                marginRight: "10px",
                                marginTop: "2px",
                            }}
                        />
                        Write your review
                    </div>
                </Button>
            </Stack>
        </GridContainer>
        <Divider 
            sx={{
                margin: "0px",
                borderWidth: "0px 0px thin",
                borderColor: "rgba(145, 158, 171, 0.2)",
                borderStyle: "dashed"
            }}
        />
        {reviews.length === 0 ? (
            <Stack 
                className=""
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    WebkitBoxPack: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    unicodeBidi: "isolate",
                    paddingTop: "60px",
                    paddingBottom: "60px",
                }}
            >
                <div
                    style={{
                        fontSize: "2rem",
                        margin: "0px",
                        fontWeight: "800",
                        lineHeight: "1.33333",
                        fontFamily: "sans-serif",
                        boxSizing: "border-box"
                    }}
                >
                    No Comments Yet
                </div>
            </Stack>
        ) : (
            reviews.map((review) => (
                <Stack
                    key={review.id}
                    sx={{
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "16px",
                        marginTop: "40px",
                        marginBottom: "40px"
                    }}
                >
                    <Stack
                        sx={{
                            width: "240px",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                        }}
                    >
                        <Avatar 
                            alt="profile picture"
                            src={review.user.image || '/img/placeholder.jpg'}
                            sx={{
                                width: "64px",
                                height: "64px",
                                position: "relative",
                                display: "flex",
                                WebkitBoxAlign: "center",
                                alignItems: "center",
                                WebkitBoxPack: "center",
                                justifyContent: "center",
                                flexShrink: "0",
                                fontSize: "1.25rem",
                                lineHeight: "1",
                                borderRadius: "50%",
                                overflow: "hidden",
                                userSelect: "none",
                                boxSizing: "border-box",
            
                            }}
                            style={{
                                fontFamily: "sans-serif",
                            }}
                        />
                        <div
                            style={{
                                flex: "1 1 auto",
                                minWidth: "0px",
                                margin: "0px"
                            }}
                        >
                            <div
                                style={{
                                    margin: "0px 0px 4px",
                                    overflow: "hidden",
                                    textOverflow: "hidden",
                                    whiteSpace: "nowrap",
                                    display: "block",
                                    fontWeight: "600",
                                    lineHeight: "1.57143",
                                    fontSize: "0.875rem",
                                    fontFamily: "sans-serif",
                                }}
                            >
                                {review.user.name}
                            </div>
                            <div
                                style={{
                                    margin: "0px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    color: "rgb(99, 115, 129)",
                                    display: "block",
                                    lineHeight: "1.5",
                                    fontSize: "0.75rem",
                                    fontFamily: "sans-serif",
                                    fontWeight: "400",
                                }}
                            >
                                {format(Date.parse(review.createdAt), 'MMM do yyyy')}   
                            </div>
                        </div>
                    </Stack>
                    <Stack
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            WebkitBoxAlign: "1",
                            flexGrow: "1",
                            maxWidth: "564px"
                        }}
                    >
                        <StyledRating
                            value={review.rating}
                            readOnly
                            icon={<AiFillStar 
                                style={{ flexShrink: 0 }}
                            />}
                            emptyIcon={<AiFillStar />}
                            precision={0.1}
                            size="small"
                        />
                        <div
                            style={{
                                margin: "0px",
                                lineHeight: "1.57143",
                                fontSize: "0.875rem",
                                fontWeight: "400",
                                fontFamily: "sans-serif",
                                color: "inherit",
                            }}
                        >
                             {review.comment}
                        </div>
                    </Stack>
                </Stack>
            ))
        )}
    </div>
   );
}
 
export default CompanyReviews;