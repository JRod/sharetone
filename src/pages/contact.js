import React from 'react';
import { graphql } from 'gatsby';
import { FormiumForm ,defaultComponents } from '@formium/react';
import Layout from "../components/layouts/layout";
import { formium } from '../lib/formium';
import {Input , Button, Textarea as ChakraTextarea} from "@chakra-ui/react"

function TextInput(props){
  return(
       <Input placeholder="Basic usage" {...props}/>
  )
}

function SubmitButton(props){
  return(
      <Button type="submit" colorScheme="blue" {...props}/>
  )
}
function Textarea (props){
  return (
    <ChakraTextarea/>
  )
}
const contactComponents={
  ...defaultComponents,
  TextInput,
  SubmitButton,
  Textarea
}

export default function ContactPage({ data }) {
  const [success, setSuccess] = React.useState(false);
  if (success) {
    return (<Layout><div>Thank you! Your response has been recorded.</div></Layout>)
  }

  return(
    <Layout>
    <FormiumForm data={data.formiumForm}
                 components={contactComponents}
                 onSubmit={async (values) => {
                   // Send form values to Formium
                   await formium.submitForm('contact', values);
                   setSuccess(true);
                 }}
    />
    </Layout>
  )
}
export const query = graphql`
    {
        formiumForm(slug: { eq: "contact" }) {
            id
            createAt
            name
            projectId
            schema
            slug
            updateAt
            version
        }
    }
`;
