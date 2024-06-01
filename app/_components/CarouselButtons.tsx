import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export const PrevButton = ({ enabled, onClick }: any) => (
  <button
    className={`embla__button rounded-2xl embla__button--prev ${
      !enabled ? "disabled" : ""
    }`}
    onClick={onClick}
    disabled={!enabled}
  >
    <ArrowLeft />
  </button>
);

export const NextButton = ({ enabled, onClick }: any) => (
  <button
    className={`embla__button rounded-2xl  embla__button--next ${
      !enabled ? "disabled" : ""
    }`}
    onClick={onClick}
    disabled={!enabled}
  >
    <ArrowRight />
  </button>
);

export const DotButton = ({ selected, onClick }: any) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

export const PrevButtonVideo = ({ enabled, onClick }: any) => (
  <button
    className={`embla__button__video rounded-2xl embla__button--prev ${
      !enabled ? "disabled" : ""
    }`}
    onClick={onClick}
    disabled={!enabled}
  >
    <ArrowLeft />
  </button>
);

export const NextButtonVideo = ({ enabled, onClick }: any) => (
  <button
    className={`embla__button__video rounded-2xl  embla__button--next ${
      !enabled ? "disabled" : ""
    }`}
    onClick={onClick}
    disabled={!enabled}
  >
    <ArrowRight />
  </button>
);
