import Link from "next/link";
import Image from "next/image";
import OpenInNew from "public/images/icons/open-in-new.svg";
import styled from "styled-components";

export default function ExternalLink({ href }) {
  return (
    <Link href={href}>
      <Icon src={OpenInNew} width={32} alt={32} />
    </Link>
  );
}

const Icon = styled(Image)``;
