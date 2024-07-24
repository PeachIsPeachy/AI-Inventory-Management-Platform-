"use client";

import useRentModal from "@/hooks/useRentModal";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { companyCategories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import dynamic from "next/dynamic";
import Counter from "../inputs/Counter";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface RentModalProps {
  currentUser?: SafeUser | null;
}

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  IMAGE = 2,
  DESCRIPTION = 3,
}

const RentModal: React.FC<RentModalProps> = ({
  currentUser
}) => {
  const router = useRouter();
  const rentModal = useRentModal();

  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      imageSrc: "",
      category: "",
      address: "",
      website: "",
      tel: "",
      location: null,
    },
  });

  const category = watch("category");
  const location = watch("location");
  const imageSrc = watch("imageSrc");

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [location]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.DESCRIPTION) {
      return onNext();
    }

    setIsLoading(true);

    let companyResponse : AxiosResponse

    axios
      .post("api/companies", data)
      .then((response) => {
        companyResponse = response
        toast.success("Company Created!");
      })
      .catch((error) => {
        console.log(error)
        toast.error("Failed to create company.");
      })
      .finally(() => {
        axios
          .post(`api/users/${currentUser?.id}`, { 
            role: "COMPANY",
            companyId: companyResponse.data.id
           })
          .then(() => {
            toast.success("Successfully updated user role!")
          })
          .catch((error) => {
            console.log(error)
            toast.error("Failed to update user role.")
          })
          .finally(() => {
            setIsLoading(false);
            router.refresh();
            reset();
            setStep(STEPS.CATEGORY);
            rentModal.onClose();
          })
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.DESCRIPTION) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your company?"
        subtitle="Pick a category"
      />
      <div
        className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-3
                    max-h-[50vh]
                    overflow-y-auto
                "
      >
        {companyCategories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => {
                setCustomValue("category", category);
              }}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your company located?"
          subtitle="Help our users find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.IMAGE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your place"
          subtitle="Show guests what your place looks like!"
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your place"
          subtitle="Short and sweet works best!"
        />
        <>
          <Input
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="description"
            label="Description"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="website"
            label="Website"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="tel"
            label="Telephone"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="address"
            label="Address"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </>
      </div>
    );
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Input your company details!"
      body={bodyContent}
    />
  );
};

export default RentModal;
