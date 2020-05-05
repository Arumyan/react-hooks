import React, { Fragment } from 'react';

const Repos = ({ repos }) => {
  return (
    <Fragment>
      {repos.map((repo) => {
        return (
          <div className='card mb-3' key={repo.id}>
            <div className='card-body'>
              <h5>
                <a
                  href={repo.html_url}
                  target='_balnk'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </h5>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Repos;
