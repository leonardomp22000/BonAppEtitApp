import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ArrowWrapper({ isLeft, children }) {
  return (
    <div className="flex items-center">
      {isLeft && <ArrowLeftIcon className="mr-2 h-5 w-5" />}
      <span>{children}</span>
      {!isLeft && <ArrowRightIcon className="ml-2 h-5 w-5" />}
    </div>
  );
}
