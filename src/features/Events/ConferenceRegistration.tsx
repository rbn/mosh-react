import { Transition } from "@headlessui/react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ui/elements/ProgressBar";
import ProgressBarSteps from "../../ui/elements/ProgressBarSteps";

const steps = [
  { id: 1, href: "#", status: "complete" },
  { id: 2, href: "#", status: "complete" },
  { id: 3, href: "#", status: "current" },
];

export default function ConferenceRegistration() {
  const [currentStage, setCurrentStage] = useState(0);
  const navigate = useNavigate();

  function onChange(i) {
    if (currentStage > 2) return;
    setCurrentStage(currentStage + i);
  }

  return (
    <div className="space-y-6 p-6">
      {true && (
        <form
          id="firstForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <div className="flex">
              <div className="grid grid-cols-1 mr-4 w-20">
                <div className="flex flex-col justify-center my-auto p-2 leading-7 bg-slate-200 text-slate-400 text-center w-20 h-16 text-4xl ">
                  24
                </div>
                <div className="flex flex-col justify-center my-auto p-2 h-8 leading-7 bg-slate-500 text-slate-100 text-center text-sm">
                  AUG
                </div>
              </div>
              <h2 className="my-auto flex text-2xl font-semibold leading-7 text-gray-900">
                Annual Conference 2023 Registration
              </h2>
              <div className="flex m-auto"> </div>
            </div>
            <div className="p-6 mt-3/4 w-8/12">
              <ProgressBarSteps steps={steps} stage={currentStage} />
            </div>
            <fieldset className="mt-6">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Registration Options
              </legend>
              <p className="mt-1 text-xs leading-6 text-gray-600 w-144">
                Please indicate whether you are registering yourself only,
                yourself and others, or only others for this event. This
                selection will present the appropriate registration options on
                subsequent pages.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onClick={() => {
                      onChange(1);
                    }}
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    I am registering myself only
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onClick={() => onChange(1)}
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    I would like to register myself and others
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onClick={() => onChange(1)}
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    I will only be registering on behalf of others, I will not
                    personally be attending
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      )}

      {currentStage > -1 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <div className="mt-6 space-y-3">
              <Transition
                className=""
                show={currentStage >= 1}
                enter="transition-all ease-in-out duration-500 delay-[200ms]"
                enterFrom="opacity-0 translate-y-6"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  Attendee Registration
                </p>
                <div className="flex items-center gap-x-3">
                  <input
                    id="attendee-registration"
                    name="attendee-registration"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onClick={() => onChange(1)}
                  />
                  <label
                    htmlFor="attendee-registration"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Regular Admission - $75.00
                  </label>
                </div>
              </Transition>
            </div>
          </div>
          <Transition
            className=""
            show={currentStage >= 2}
            enter="transition-all ease-in-out duration-500 delay-[200ms]"
            enterFrom="opacity-0 translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-2/3 mt-6 flex items-center justify-center gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => {
                  // setcurrentStep(1);
                  Array.from(document.querySelectorAll("input")).forEach(
                    (input) => (input.value = "")
                  );
                  this.setState({
                    itemvalues: [{}],
                  });
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  onChange(1);
                }}
              >
                Save
              </button>
            </div>
          </Transition>
        </form>
      )}
    </div>
  );
}
