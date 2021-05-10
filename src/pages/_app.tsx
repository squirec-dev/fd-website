import '../../styles/_core.scss';

interface AppProps {
    Component: React.FunctionComponent,
    pageProps?: Record<string, string>
}

const App = ({
    Component,
    pageProps
}:AppProps): React.ReactElement => (
    <Component {...pageProps} />
);

export default App;
