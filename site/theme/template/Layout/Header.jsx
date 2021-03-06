import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import enquire from 'enquire.js';
import classNames from 'classnames';
import { Select, Menu, Row, Col, Icon, Popover } from 'react-lu-design';

const Option = Select.Option;

export default class Header extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    intl: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      menuMode: 'horizontal',
    };
  }

  componentDidMount() {
    enquire.register('only screen and (min-width: 320px) and (max-width: 940px)', {
      match: () => {
        this.setState({ menuMode: 'inline' });
      },
      unmatch: () => {
        this.setState({ menuMode: 'horizontal' });
      },
    });
  }

  handleSearch = (value) => {
    this.context.router.push({ pathname: `${value}/` });
  }

  handleSelectFilter = (value, option) => {
    return option.props['data-label'].indexOf(value.toLowerCase()) > -1;
  }

  handleLangChange = () => {
    if (typeof localStorage !== 'undefined') {
      const locale = this.context.intl.locale === 'zh-CN' ? 'en-US' : 'zh-CN';
      localStorage.setItem('locale', locale);
      location.search = `?locale=${locale}`;
    }
  }

  render() {
    const { location, picked, isFirstScreen } = this.props;
    const components = picked.components;
    const module = location.pathname.replace(/\/$/, '').split('/').slice(0, -1).join('/');
    let activeMenuItem = module || 'home';
    if (activeMenuItem === 'components' || location.pathname === 'changelog') {
      activeMenuItem = 'docs/react';
    }

    const locale = this.context.intl.locale;
    const excludedSuffix = locale === 'zh-CN' ? 'en-US.md' : 'zh-CN.md';
    const options = components
      .filter(({ meta }) => !meta.filename.endsWith(excludedSuffix))
      .map(({ meta }) => {
        const pathSnippet = meta.filename.split('/')[1];
        const url = `/components/${pathSnippet}`;
        const subtitle = meta.subtitle;
        return (
          <Option value={url} key={url} data-label={`${meta.title.toLowerCase()} ${subtitle || ''}`}>
            <strong>{meta.title}</strong>
            {subtitle && <span className="ant-component-decs">{subtitle}</span>}
          </Option>
        );
      });

    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !isFirstScreen,
    });

    const menuMode = this.state.menuMode;
    const query = location.query;
    const menu = [
      <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to={{ query, pathname: '/' }}>
            <FormattedMessage id="app.header.menu.home" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/spec">
          <Link to={{ query, pathname: '/docs/spec/introduce' }}>
            <FormattedMessage id="app.header.menu.spec" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/pattern">
          <Link to={{ query, pathname: '/docs/pattern/navigation' }}>
            <FormattedMessage id="app.header.menu.pattern" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/react">
          <Link to={{ query, pathname: '/docs/react/introduce' }}>
            <FormattedMessage id="app.header.menu.components" />
          </Link>
        </Menu.Item>
        {/*
         <Menu.Item key="docs/practice">
         <Link to={{ query, pathname: '/docs/practice/cases' }}>
         <FormattedMessage id="app.header.menu.practice" />
         </Link>
         </Menu.Item>
         <Menu.Item key="docs/resource">
         <Link to={{ query, pathname: '/docs/resource/download' }}>
         <FormattedMessage id="app.header.menu.resource" />
         </Link>
         </Menu.Item>
        */}
      </Menu>,
    ];

    const searchPlaceholder = locale === 'zh-CN' ? '搜索组件...' : 'Search Components...';
    return (
      <header id="header" className={headerClassName}>
        {menuMode === 'inline' ? <Popover
          overlayClassName="popover-menu"
          placement="bottomRight"
          content={menu}
          trigger="click"
          arrowPointAtCenter
        >
          <Icon
            className="nav-phone-icon"
            type="menu"
          />
        </Popover> : null}
        <Row>
          <Col lg={4} md={6} sm={24} xs={24}>
            <Link to={{ query, pathname: '/' }} id="logo">
              <span>Lu Design</span>
            </Link>
          </Col>
          <Col lg={20} md={18} sm={17} xs={0} style={{ display: 'block' }}>
            <div id="search-box">
              <Select combobox
                dropdownClassName="component-select"
                placeholder={searchPlaceholder}
                optionFilterProp="data-label"
                optionLabelProp="data-label"
                filterOption={this.handleSelectFilter}
                onSelect={this.handleSearch}
              >
                {options}
              </Select>
            </div>
            {menuMode === 'horizontal' ? menu : null}
          </Col>
        </Row>
      </header>
    );
  }
}
