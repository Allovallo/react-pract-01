import user from './startData/user.json';
import statisticalData from './startData/statistical-data.json';
import friends from './startData/friends.json';

import { Profile } from 'components/profile/profile';
import { Statistics } from 'components/statistics/statistics';
import { FriendList } from 'components/friendlist/friendlist';

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

      <FriendList friends={friends} />
    </div>
  );
}

export default App;
