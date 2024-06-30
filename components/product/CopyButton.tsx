'use client';

import React, { ReactNode, useState } from 'react';
import { Button } from '../ui/button';
import { Copy, CopyCheck } from 'lucide-react';

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
	const [buttonLabel, setButtonLabel] = useState<ReactNode>(
		<>
			<Copy className='h-4 w-4' /> Copy code
		</>
	);

	const copyToClipboard = () => {
		// Create a temporary textarea element
		const textarea = document.createElement('textarea');
		textarea.value = textToCopy;

		// Append the textarea to the document
		document.body.appendChild(textarea);

		// Select the text in the textarea
		textarea.select();

		// Copy the selected text to the clipboard
		document.execCommand('copy');

		// Remove the textarea from the document
		document.body.removeChild(textarea);

		// Update button label to show copied text and icon temporarily
		setButtonLabel(
			<>
				<CopyCheck className='h-4 w-4' /> Copied!
			</>
		);

		// After 1 second, revert back to the original button label
		setTimeout(() => {
			setButtonLabel(
				<>
					<Copy className='h-4 w-4' /> Copy code
				</>
			);
		}, 1000);
	};

	return (
		<Button
			className='gap-1.5'
			size='sm'
			variant='outline'
			onClick={copyToClipboard}
		>
			{buttonLabel}
		</Button>
	);
};

export default CopyButton;
