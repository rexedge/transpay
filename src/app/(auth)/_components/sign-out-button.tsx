'use client';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import React from 'react';

const SignOutBtn = () => {
	return <Button onClick={() => signOut()}>SIGN OUT</Button>;
};

export default SignOutBtn;
