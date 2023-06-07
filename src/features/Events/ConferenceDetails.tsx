import { PaperClipIcon } from "@heroicons/react/20/solid";
import Button from "../../ui/elements/Button";
import { useNavigate } from "react-router-dom";
import { RiCalendarLine } from "react-icons/ri";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaEnvelopeSquare,
} from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function ConferenceDetails() {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <div className="px-4 sm:px-0">
          <div className="flex">
            <div className="grid grid-cols-1 mr-4">
              <div className="flex flex-col justify-center my-auto p-2 leading-7 bg-slate-200 text-slate-400 text-center w-16 h-16 text-4xl ">
                24
              </div>
              <div className="flex flex-col justify-center my-auto p-2 h-8 leading-7 bg-slate-500 text-slate-100 text-center text-sm">
                AUG
              </div>
            </div>
            <div className="flex justify-center my-auto flex-col no-wrap">
              <h2 className="font-semibold leading-7 text-gray-900 text-xl">
                Annual Conference
              </h2>
              <div>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing
                </p>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  <div className="flex flex-row">
                    <FaTwitterSquare className="h-8 w-8 text-sky-500" />
                    <FaFacebookSquare className="h-8 w-8 text-blue-900" />
                    <FaLinkedin className="h-8 w-8 text-sky-800" />
                    <FaEnvelopeSquare className="h-8 w-8 text-sky-500" />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex">
          <div className="mt-6 border-t border-gray-100 flex-1">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Description
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus rerum nobis delectus fugiat reprehenderit,
                  tenetur aperiam vel voluptatibus obcaecati animi blanditiis
                  distinctio saepe neque sequi. Ducimus cupiditate sit unde
                  fugiat?
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Location
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore recusandae corrupti illo perferendis nam voluptatem,
                  reiciendis nemo consectetur magni blanditiis possimus! At
                  rerum voluptate a, consequuntur deleniti porro in
                  exercitationem.
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  About
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
              {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Attachments
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        attachment 1.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        attachment 2.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div> */}
              {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <Button
                    style="rounded"
                    width="w-80"
                    onClick={(e) => {
                      e.preventDefault;
                      navigate("/");
                    }}
                  >
                    Register
                  </Button>
                </dd>
              </div> */}
            </dl>
          </div>
          <div className="flex-initial w-64 justify-center mx-3 p-6 border-l-2">
            <h3 className="py-2">Regular admission</h3>
            <div className="flex py-2">
              <p className="flex-initial">Non-member</p>
              <span className="flex-1 text-right">$75</span>
            </div>
            <div className="flex">
              <Button
                style="rounded"
                width="w-36 my-4 flex-initial"
                onClick={(e) => {
                  e.preventDefault;
                  navigate("/");
                }}
              >
                Register
              </Button>
              <RiCalendarLine className="m-auto w-8 h-8 text-cyan-900" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
