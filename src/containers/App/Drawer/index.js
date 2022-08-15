import React, { useEffect } from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import icon_overView from '../../../assets/images/drawer/overview.svg';
import icon_trade from '../../../assets/images/drawer/trade.svg';
import icon_wallet from '../../../assets/images/drawer/wallet.svg';
import icon_transactions from '../../../assets/images/drawer/transactions.svg';
import icon_statistics from '../../../assets/images/drawer/statistics.svg';
import icon_settings from '../../../assets/images/drawer/settings.svg';
import icon_referral from '../../../assets/images/drawer/referral.svg';
import icon_logout from '../../../assets/images/drawer/logout.svg';
import icon_profile from '../../../assets/images/drawer/profile.svg';

import icon_overView_active from '../../../assets/images/drawer/overview_active.svg';
import icon_trade_active from '../../../assets/images/drawer/trade_active.svg';
import icon_wallet_active from '../../../assets/images/drawer/wallet_active.svg';
import icon_transactions_active from '../../../assets/images/drawer/transactions_active.svg';
import icon_statistics_active from '../../../assets/images/drawer/statistics_active.svg';
import icon_settings_active from '../../../assets/images/drawer/settings_active.svg';
import icon_referral_active from '../../../assets/images/drawer/referral_active.svg';
import icon_logout_active from '../../../assets/images/drawer/logout_active.svg';
import icon_profile_active from '../../../assets/images/drawer/profile_active.svg';

import Desktop from './Desktop';
import Mobile from './Mobile';
import { logoutAction } from '../../../redux/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';

const AppDrawer = ({ mobileDrawerOpen, setMobileDrawerOpen, ...props }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { userQuizDetails = {} } = useSelector((store) => {
    const quiz_store = store.quiz;

    if (quiz_store) return quiz_store.toJS();

    return {};
  });

  useEffect(() => {
    if (userQuizDetails.completed) {
      history.push('/app/risk-tolerance-quiz/');
    }
  }, []);

  const getDrawerItems = () => {
    return drawer_items.filter((item) => {
      const isCompleted = userQuizDetails.completed ? 'RiskToleranceQuiz' : 'RiskToleranceProfile';
      return item.key !== isCompleted;
    });
  };

  return (
    <>
      <Desktop
        logout={() => dispatch(logoutAction())}
        drawer_items={getDrawerItems()}
        active_route={location.pathname}
      />
      <Mobile
        logout={() => dispatch(logoutAction())}
        drawer_items={getDrawerItems()}
        mobileDrawerOpen={mobileDrawerOpen}
        setMobileDrawerOpen={setMobileDrawerOpen}
      />
    </>
  );
};

export default AppDrawer;

const drawer_items = [
  {
    key: 'Home',
    name: 'Home',
    path: '/app',
    icon: icon_overView,
    icon_active: icon_overView_active,
  },
  {
    key: 'Profile',
    name: 'Profile',
    path: '/app/risk-aware-profile',
    icon: icon_profile,
    icon_active: icon_profile_active,
  },
  {
    key: 'TechnicalAnalysis',
    name: 'Technical Analysis',
    path: '/app/technical-analysis',
    icon: icon_trade,
    icon_active: icon_trade_active,
  },
  {
    key: 'EconomicOutlook',
    name: 'Economic Outlook',
    path: '/app/economic-outlook',
    icon: icon_wallet,
    icon_active: icon_wallet_active,
  },
  {
    key: 'PortfolioAssetAllocation',
    name: 'Portfolio Asset Allocation',
    path: '/app/portfolio-asset-allocation',
    icon: icon_transactions,
    icon_active: icon_transactions_active,
  },
  {
    key: 'RiskProfileQuiz',
    name: 'Risk Profile Quiz',
    path: '/app/risk-tolerance-quiz',
    icon: icon_statistics,
    icon_active: icon_statistics_active,
  },
  {
    key: 'LearningCourse',
    name: 'Learn Course',
    path: '/app/challenge/',
    icon: icon_settings,
    icon_active: icon_settings_active,
  },

  {
    key: 'TestYourKnowledge',
    name: 'Test Your Knowledge',
    path: '/app/test-your-knowledge',
    icon: icon_referral,
    icon_active: icon_referral_active,
  },

  {
    key: 'Logout',
    name: 'logout',
    path: '',
    icon: icon_logout,
    icon_active: icon_logout_active,
  },
];
