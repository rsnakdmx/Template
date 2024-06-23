export const TrustedTypes = async (): Promise<void> => {
	if (!window.trustedTypes?.createPolicy) return Promise.resolve();

	return import('dompurify').then((m) => {
		const DOMPurify = m.default;

		window.trustedTypes?.createPolicy('default', {
			createHTML: (string) => DOMPurify.sanitize(string, { RETURN_TRUSTED_TYPE: true }).toString(),
			createScript: (string) => DOMPurify.sanitize(string, { RETURN_TRUSTED_TYPE: true }).toString(),
			createScriptURL: (string) => DOMPurify.sanitize(string, { RETURN_TRUSTED_TYPE: true }).toString(),
		});
	});
};
