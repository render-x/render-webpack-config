import { formatPathForWin } from '@x.render/render-node-utils';

const getSourceCode = (pagePath: string) => {
  const appSrcPath = formatPathForWin(pagePath);
  const code = `
import { createRoot } from 'react-dom/client';
import App from '${appSrcPath}'
createRoot(
    document.getElementById('root')
).render(
     <App/>
);`;
  return code;
};

export = getSourceCode;
