"use client";
import Image from "next/image";
import Accordion from "@/component/molecules/accordion";
import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

export default function DetailCoursePage() {
  return (
    <div className="mt-9">
      <Link
        className="relative flex items-center content-center gap-2 hover:bg-[#0f0f0f] p-2 rounded-full w-45 hover:text-green-500 cursor-pointer"
        href="/aula-virtual"
      >
        <FaArrowLeftLong />
        <span>Volver atrás</span>
      </Link>

      <div className="gap-7 grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          <video className="rounded-lg" width={1000} height={600} controls>
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>
          <h1 className="font-semibold text-2xl">Nombre del video</h1>
          <div className="flex items-center gap-2 text-[#686868]">
            <MdOutlineDateRange size={18} />
            <p>20.09.2025</p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="flex items-center content-center gap-4 bg-[#191818] mb-5 p-5 rounded-lg h-25">
            <Image className="rounded-full" src="/profile.jpg" alt="Instructor" width={50} height={50} priority />
            <div>
              <span className="text-sm">Impartido Por:</span>
              <p className="font-semibold">Michaell Norberto Soto</p>
            </div>
          </div>

          <div className="h-100 overflow-scroll">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-full">
              <div className="bg-primary p-0.5 rounded-full w-40 font-medium text-black text-xs text-center leading-none">
                40%
              </div>
            </div>
            <Accordion
              items={[
                {
                  title: "Gestión del riesgo",
                  content: (
                    <ul className="pl-5 leading-loose cursor-pointer list-none">
                      <li className="hover:text-green-500 cursor-pointer">
                        <div className="flex items-center mb-4 cursor-pointer">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-sm focus:ring-2 focus:ring-blue-500 w-4 h-4 text-blue-600"
                          />
                          <label htmlFor="default-checkbox" className="ms-2 font-medium text-gray-900 hover:text-green-400 dark:text-gray-300 text-sm cursor-pointer">
                            Stop Loss (para limitar pérdidas)
                          </label>
                        </div>
                      </li>
                    </ul>
                  ),
                },
                {
                  title: "Psicología del trading",
                  content: (
                    <ul className="pl-5 leading-loose cursor-pointer list-none">
                      <li className="hover:text-green-500 cursor-pointer">
                        <div className="flex items-center mb-4 cursor-pointer">
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-sm focus:ring-2 focus:ring-blue-500 w-4 h-4 text-blue-600"
                          />
                          <label htmlFor="checkbox-2" className="ms-2 font-medium text-gray-900 hover:text-green-400 dark:text-gray-300 text-sm cursor-pointer">
                            Evitar operar por impulso
                          </label>
                        </div>
                      </li>
                      <li className="hover:text-green-500 cursor-pointer">
                        <div className="flex items-center mb-4 cursor-pointer">
                          <input
                            id="checkbox-3"
                            type="checkbox"
                            className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-sm focus:ring-2 focus:ring-blue-500 w-4 h-4 text-blue-600"
                          />
                          <label htmlFor="checkbox-3" className="ms-2 font-medium text-gray-900 hover:text-green-400 dark:text-gray-300 text-sm cursor-pointer">
                            Seguir tu plan sin emociones
                          </label>
                        </div>
                      </li>
                    </ul>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
