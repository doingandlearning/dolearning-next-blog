import { useContext } from 'react';

import SiteContext from 'context/site-context';


export default function useSite() {
  const homepage = '';

  const site = useContext(SiteContext);

  return {
    ...site,
    homepage,
  };
}
