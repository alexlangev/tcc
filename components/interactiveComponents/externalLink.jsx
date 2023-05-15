import Image from "next/image";
import OpenInNew from "public/images/icons/open-in-new.svg";
import styled from "styled-components";

export default function ExternalLink({ href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon src={OpenInNew} width={22} alt={22} />
    </a>
  );
}

const Icon = styled(Image)`
  display: inline-block;
  vertical-align: middle;
`;
