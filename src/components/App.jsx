import RenderMarkupProfile from './Profile';
import User from './path/to/user.json';
import Data from './path/to/data.json';
import UploadStats from './Statistics';
import FriendsList from './path/to/friends.json';
import CreateFriendList from './FriendList';
import Transactions from './path/to/transactions.json';
import TransactionHistory from './TransactionHistory';

console.log(Transactions);
export const App = () => {
  return (
    <>
      <RenderMarkupProfile userData={User} />
      <UploadStats statisticsData={Data} />
      <CreateFriendList friends={FriendsList} />
      <TransactionHistory items={Transactions} />
    </>
  );
};
