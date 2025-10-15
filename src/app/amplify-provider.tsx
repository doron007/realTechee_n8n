'use client'

import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import outputs from '../../amplify_outputs.json'
import type { ReactNode } from 'react'

Amplify.configure(outputs)

export default function AmplifyProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <Authenticator>
      {children}
    </Authenticator>
  )
}