import LayoutCard from "../common_components/LayoutCard";
import ButtonContained from "../common_components/ButtonContained";
import LoadingButton from "../common_components/LoadingButton";
import React from "react";
import Link from "next/link";

export default function TotalCard({
  currentStep,
  setCurrentStep,
  totalSteps,
  showLoadingButton,
  showSingleButton,
  linkForward = "",
  linkBackward = "",
}) {
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [loading, setLoading] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsComplete(true);
    }, 3000);
  };
  return (
    <LayoutCard>
      <div className="mb-3 flex flex-col gap-4 lg:mb-4">
        <div className="flex justify-evenly">
          <p className="font-ubuntu text-base font-normal leading-relaxed tracking-tight text-black">
            Total
          </p>
          <div className="font-ubuntu text-base leading-relaxed tracking-tight text-cs600">
            <span className="font-normal">$</span>
            <span className="mr-1 font-bold">359</span>
            <span className="font-normal">MXN</span>
          </div>
        </div>

        {showLoadingButton ? (
          <div className="flex justify-center">
            <LoadingButton
              isComplete={isComplete}
              isLoading={loading}
              onClick={handleClick}
            ></LoadingButton>
          </div>
        ) : showSingleButton ? (
          <div className="flex justify-center">
            <Link href={linkForward} passHref>
              <ButtonContained
                variant="generalPoppins"
                showIcon={true}
                isArrowLeft={true}
                onClick={handleClick}
                text="Regresar al menu"
              ></ButtonContained>
            </Link>
          </div>
        ) : (
          <div className="flex justify-evenly">
            <Link href={linkBackward} passHref>
              <ButtonContained
                onClick={handlePrev}
                disabled={currentStep === 1}
                text="Volver"
                variant="text"
                showIcon="true"
              />
            </Link>
            <Link href={linkForward} passHref>
              <ButtonContained
                onClick={handleNext}
                disabled={currentStep === totalSteps}
                isArrowLeft={false}
                text="Siguiente"
                variant="generalPoppins"
                showIcon="true"
              />
            </Link>
          </div>
        )}
      </div>
    </LayoutCard>
  );
}
