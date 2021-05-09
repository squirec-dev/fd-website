import '../../styles/_core.scss';

interface MyAppTypes {
    Component: React.FunctionComponent,
    pageProps?: Record<string, string>
}

const MyApp = ({
    Component,
    pageProps
}:MyAppTypes): React.ReactElement => (
    <Component {...pageProps} />
);

export default MyApp;
