const TrustedTypes = async (): Promise<boolean> => {
	if (!window.trustedTypes?.createPolicy) return Promise.resolve(true);

	return import('dompurify').then((m) => {
		const DOMPurify = m.default;

		return !!window.trustedTypes?.createPolicy('default', {
			createHTML: (string) => DOMPurify.sanitize(string, { RETURN_TRUSTED_TYPE: true }).toString(),
			createScript: (string) => DOMPurify.sanitize(string, { RETURN_TRUSTED_TYPE: true }).toString(),
			createScriptURL: (string) => DOMPurify.sanitize(string, { RETURN_TRUSTED_TYPE: true }).toString(),
		});
	});
};

export const SetTrusted = async () => {
	return await TrustedTypes();
};
