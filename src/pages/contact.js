import React from 'react';
import { graphql } from 'gatsby';
import { FormiumForm ,defaultComponents } from '@formium/react';
import FullPageLayout from "../components/layouts/fullpagelayout";
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
    return (<FullPageLayout><div>Thank you! Your response has been recorded.</div></FullPageLayout>)
  }

  return(
    <FullPageLayout>
    <FormiumForm data={data.formiumForm}
                 components={contactComponents}
                 onSubmit={async (values) => {
                   // Send form values to Formium
                   await formium.submitForm('contact', values);
                   setSuccess(true);
                 }}
    />
    </FullPageLayout>
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
