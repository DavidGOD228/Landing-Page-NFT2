export function isMobileSafari() {
	return (
		navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
		navigator.userAgent.match(/AppleWebKit/)
	);
}

export const isSafariNavigator = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
