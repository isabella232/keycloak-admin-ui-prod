import { Popover } from "@patternfly/react-core";
import { HelpIcon } from "@patternfly/react-icons";
import React, { isValidElement, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useHelp } from "./HelpHeader";

type HelpItemProps = {
  helpText: string | ReactNode;
  forLabel: string;
  forID: string;
  noVerticalAlign?: boolean;
  unWrap?: boolean;
  id?: string;
};

export const HelpItem = ({
  helpText,
  forLabel,
  forID,
  id,
  noVerticalAlign = true,
  unWrap = false,
}: HelpItemProps) => {
  const { t } = useTranslation();
  const { enabled } = useHelp();
  return enabled ? (
    <Popover
      bodyContent={isValidElement(helpText) ? helpText : t(helpText as string)}
    >
      <>
        {!unWrap && (
          <button
            id={id}
            aria-label={t(`helpLabel`, { label: forLabel })}
            onClick={(e) => e.preventDefault()}
            aria-describedby={forID}
            className="pf-c-form__group-label-help"
          >
            <HelpIcon noVerticalAlign={noVerticalAlign} />
          </button>
        )}
        {unWrap && <HelpIcon noVerticalAlign={noVerticalAlign} />}
      </>
    </Popover>
  ) : null;
};
