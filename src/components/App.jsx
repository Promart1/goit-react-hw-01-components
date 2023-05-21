
import { Profile } from "./Profile/Profile";
import { ProfileList } from "./Profile/ProfileList";
import data from "./Statistics/data.json";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friend/FriendList";
import friends from "./Friend/friends.json";
import { TransactionHistory } from "./Transaction/TransactionHistory";
import transactions from "./Transaction/transactions.json";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* React homework template */}
      <ProfileList user={Profile} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>



    </div>
  );
};
