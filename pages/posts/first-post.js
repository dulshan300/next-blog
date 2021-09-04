import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";
import Layout from '../../components/layout';
import Link from 'next/link';
import Alert from "../../components/alert";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor:pointer;

    &:hover {
        box-shadow: 0 0 7px palevioletred;
    }
`;


export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Title>First Post</Title>
            <img src="/images/profile.jpg" alt="Your Name" />
            <Link href="/">
                <Button>Normal</Button>
            </Link>
            <Button primary>Primary</Button>

            <Alert type="success">
                Hello
            </Alert>

            <Image
                src="/images/profile.jpg"
                alt="Your Name"
                height={144}
                width={144}
            />
        </Layout>
    );
}

