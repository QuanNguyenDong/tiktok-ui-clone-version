import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img 
				className={cx('avatar')} 
				src="https://images.unsplash.com/photo-1654521650319-2d862a1df0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
				alt="Kugarang" 
			/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Kangaroo</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>kangaroo</span>
            </div>
        </div>
    );
}

export default AccountItem;
