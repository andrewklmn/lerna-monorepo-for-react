import React, { JSX } from "react";

export type MyLabelComponent = (props: {
    text: string;
}) => JSX.Element;

export const MyLabel: MyLabelComponent = ({ text }) => <div>{text}</div>;
