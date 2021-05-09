import Booking from './Booking';
import Covea from './Covea';
import Other from './Other';
import Sunmaster from './Sunmaster';

const Jobs: Record<string, () => React.ReactElement> = {
    'Covea': Covea,
    'Transport@Booking.com': Booking,
    'Sunmaster': Sunmaster,
    'Other': Other,
};

export default Jobs;
