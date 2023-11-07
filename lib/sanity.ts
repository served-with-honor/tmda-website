import sanityClient from '../src/sanityConfig';

const getTeamMembers = async (): Promise<{ name: string, position: string, image?: any }[]> => {
  const query = `
    *[
      _type == "teamMember"
      && active
      && hidden != true
      && 'Telemedica' in entity[]
      && !(_id in path("drafts.**")) 
    ] | order(orderRank asc){
      'name': coalesce(preferred_name, first_name) + " " + last_name,
      position,
      image,
    }
  `;

  return await sanityClient.fetch(query);
}

const getProviders = async (): Promise<{ name: string, certification: string, team: string, image?: any, isTeamLead?: boolean }[]> => {
  const query = `
    *[_type=='provider'
    && active
    && !(_id in path("drafts.**"))
    ] | order(orderRank)
    {
      'name': coalesce(name.preferred, name.first) + " " + name.last,
      team,
      isTeamLead,
      certification,
      position,
      image,
    }
  `;
  return await sanityClient.fetch(query);
}

export {
  getTeamMembers,
  getProviders,
}