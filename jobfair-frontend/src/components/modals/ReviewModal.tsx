"use client";

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";

import useReviewModal from "@/hooks/useReviewModal";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import Divider from "@mui/material/Divider";
import ReviewInput from "../inputs/ReviewInput";
import { Rating, styled } from "@mui/material";
import axios from "axios";
import { SafeCompany } from "@/types";

const StyledRating = styled(Rating)({
  '& .MuiRating-iconEmpty': {
    color: '#cad1d7'
  },
});

interface ReviewProps {
  currentCompany: SafeCompany
}

const ReviewModal: React.FC<ReviewProps> = ({
  currentCompany,
}) => {
  const router = useRouter();
  const reviewModal = useReviewModal()
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue: setFormValue
  } = useForm<FieldValues>({
    defaultValues: {
      comment: "",
      rating: 0,
      companyId: currentCompany.id,
    },
  });

  const handleRatingChange = (newValue: number | null) => {
    setValue(newValue);
    setFormValue("rating", newValue); // Update the rating value in the form data
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.rating <= 0) {
      return toast.error('Please select a rating.')
    }
    if (!data.comment.trim()) {
      return toast.error('Please provide a valid comment.')
    }
    setIsLoading(true);
    axios.post('/api/reviews', {
      rating: data.rating,
      comment: data.comment.trim(),
      companyId: data.companyId,
    })
        .then(() => {
            toast.success('Review Posted!')
            router.refresh()
            handleRatingChange(0)
            setFormValue("comment", "")
            reviewModal.onClose()
        })
        .catch((error) => {
            console.log(error)
            toast.error('Something went wrong.')
        })
        .finally(() => {
            setIsLoading(false)
        })
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Speak your mind" subtitle="Give us a review!" />
      <ReviewInput
        id="comment"
        label="Comment"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <div className="flex flex-row gap-1 justify-center">
        <StyledRating
          id="rating"
          value={value}
          onChange={(event, newValue) => handleRatingChange(newValue)}
          icon={<AiFillStar 
            style={{ flexShrink: 0 }}
          />}
          emptyIcon={<AiFillStar />}
          size="large"
        />
      </div>
    </div>
  );

  const footerContent = (
    <div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={reviewModal.isOpen}
      title="Add Review"
      actionLabel="Post"
      onClose={reviewModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default ReviewModal;
