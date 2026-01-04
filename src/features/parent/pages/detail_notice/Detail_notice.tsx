import { Notice_detail_card } from './components/Notice_details_card';

export default function Detail_notice() {
  return (
    <div>
      <div>
        <Notice_detail_card
          title="Notice Title"
          date="2023-01-01"
          fileUrl="/.png"
          description={'This is a notice description'}
        />
      </div>
    </div>
  );
}
