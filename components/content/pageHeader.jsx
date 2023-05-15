import styled from "styled-components";
import { COLORS } from "@/utils/constants";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";

export default function PageHeader({ title, sub }) {
  const router = useRouter();
  const currentHref = router.asPath;
  const crumbsArray = ["home"];
  currentHref.split("/").forEach((crumb) => {
    if (crumb !== "") {
      crumbsArray.push(crumb);
    }
  });
  let path = "/";

  return (
    <Wrapper>
      <BreadCrumbs>
        {crumbsArray.map((crumb, index) => {
          if (index !== 0) {
            if (index === 1) {
              path = `/${crumb}`;
            } else {
              path = `${path}/${crumb}`;
            }
          }
          return (
            <Fragment key={`crumb-${crumb}`}>
              <li>
                <Link href={path}>{crumb}</Link>
              </li>
              {index !== crumbsArray.length - 1 && (
                <BreadCrumbsSeparator>/</BreadCrumbsSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadCrumbs>
      <Title>{title}</Title>
      <Subtitle>{sub}</Subtitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.secBg};
  border-radius: 1.5rem;
`;

const BreadCrumbs = styled.ol`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
`;

const BreadCrumbsSeparator = styled.span`
  padding: 0 8px;
`;

const Title = styled.h1`
  margin-top: 48px;
  margin-bottom: 32px;
`;

const Subtitle = styled.p`
  margin-bottom: 16px;
  color: ${COLORS.sub};
`;
