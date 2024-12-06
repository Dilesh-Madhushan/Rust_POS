'use client'

import { SetStateAction, useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';

export default function Greet() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    invoke<string>('greet', { name: 'Next.js' })
      .then((result: SetStateAction<string>) => setGreeting(result))
      .catch(console.error)
  }, [])

  // Necessary because we will have to use Greet as a component later.
  return <div>{greeting}</div>;
}