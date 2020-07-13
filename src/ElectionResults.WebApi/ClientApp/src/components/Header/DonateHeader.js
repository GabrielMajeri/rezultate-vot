import React from 'react';
import { Button, Media, Label, Container } from 'reactstrap';
import code4Ro from '../../images/code4Romania.svg';
import { useTranslation } from "react-i18next";

export function DonateHeader() {
  const { t } = useTranslation();
  return (
    <div>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Label className="info-label">
          {
            t('developed_by')
          }
        </Label>
        <Media src={code4Ro} />
        <a href="https://code4.ro/ro/doneaza/">
          <Button color="success">
            {
              t('donate')
            }
          </Button>
        </a>
      </Container>
    </div>
  )
}
