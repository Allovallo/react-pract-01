import user from './startData/user.json';
import statisticalData from './startData/statistical-data.json';
import { Profile } from 'components/profile/profile';
import { Statistics } from 'components/statistics/statistics';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
