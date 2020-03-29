import React, { useRef } from 'react';
import { Carousel, Row, Col, Form, Input, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Element } from 'react-scroll';
import { Parallax } from "react-parallax";
import classNames from 'classnames';
import { connect } from 'dva';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import menuData from '@/config/menu.js';
import aboutImg from '@/assets/about-img.jpg';
import parallaxImg from '@/assets/parallax1.jpg';
import s1Img from '@/assets/s1.png';
import s2Img from '@/assets/s1.png'
import s3Img from '@/assets/s1.png'

import styles from './index.less';

const FormItem = Form.Item;
const { TextArea } = Input;

const Home = props => {
  const { dispatch, submitting } = props;
  const carouselRef = useRef(null);
  const [form] = Form.useForm();

  const handleSendMessage = values => {
    dispatch({
      type: 'home/sendMessage',
      payload: values,
    });
  }

  return (
    <>
      <GlobalHeader
        className={styles.header}
        menu={menuData}
      />
      <Element name="Home">
        <div className={styles.homeCarousel}>
          <Carousel ref={carouselRef} effect="fade" autoplay dots={false}>
            <div className={classNames(styles.item, styles.first)}>
              <div className={styles.itemWrapper}>
                <h2>Alstar web studio</h2>
                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="/" className={styles.btn}>Read More</a>
              </div>
            </div>
            <div className={classNames(styles.item, styles.second)}>
              <div className={styles.itemWrapper}>
                <h2>Creativity and technology</h2>
                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="/" className={styles.btn}>Read More</a>
              </div>
            </div>
            <div className={classNames(styles.item, styles.third)}>
              <div className={styles.itemWrapper}>
                <h2>Sequi ea ut et est quaerat</h2>
                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="/" className={styles.btn}>Read More</a>
              </div>
            </div>
          </Carousel>
          <LeftOutlined className={classNames(styles.controller, styles.prev)} onClick={() => carouselRef.current.prev()} />
          <RightOutlined className={classNames(styles.controller, styles.next)} onClick={() => carouselRef.current.next()} />
        </div>
      </Element>
      <Element name="About">
        <div className={styles.section}>
          <div className={styles.container}>
            <Row>
              <Col md={{ span: 16, offset: 4 }}>
                <div className={styles.sectionHeading}>
                  <h2>About us</h2>
                  <div className={styles.headingLine}></div>
                  <p>We’ve been building unique digital products, platforms, and experiences for the past 6 years.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} className={styles.aboutImg}>
                <img src={aboutImg} alt="img" />
              </Col>
              <Col md={12} className={styles.content}>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elite storium paralate</h2>
                <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum Libero justo laoreet sit amet
                  cursus sit amet dictum sit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend
                  donec Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Element>
      <Parallax
        className={styles.section}
        bgImage={parallaxImg}
      >
        <div className={styles.container}>
          <Row>
            <Col md={24} className={styles.parallax}>
              <h2 className="wow bounceInDown">Details are the key for perfection</h2>
              <p className="lead wow bounceInUp">We mix all detailed things together</p>
            </Col>
          </Row>
        </div>
      </Parallax>
      <Element name="Service">
        <div className={styles.section}>
          <div className={styles.container}>
            <Row>
              <Col md={{ span: 16, offset: 4 }}>
                <div className={styles.sectionHeading}>
                  <h2>Services</h2>
                  <div className={styles.headingLine}></div>
                  <p>We’ve been building unique digital products, platforms, and experiences for the past 6 years.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <div className={styles.serviceCarousel}>
                  <Carousel>
                    <div>
                      <Row className={styles.item}>
                        <Col md={12} sm={24}>
                          <h4>Website Design</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        </Col>
                        <Col md={12} sm={24}>
                          <img src={s1Img} alt="img"/>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row className={styles.item}>
                        <Col md={12} sm={24}>
                          <h4>Brand Identity</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        </Col>
                        <Col md={12} sm={24}>
                          <img src={s2Img} alt="img"/>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row className={styles.item}>
                        <Col md={12} sm={24}>
                          <h4>Web & Mobile Apps</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        </Col>
                        <Col md={12} sm={24}>
                          <img src={s3Img} alt="img"/>
                        </Col>
                      </Row>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Element>
      <Element name="Contact">
        <div className={styles.section} style={{ background: '#f8f8f8' }}>
          <div className={styles.container}>
            <Row>
              <Col md={{ span: 16, offset: 4 }}>
                <div className={styles.sectionHeading}>
                  <h2>Contact Us</h2>
                  <div className={styles.headingLine}></div>
                  <p>If you have any question or just want to say 'hello' to Alstar web studio please fill out form below and we will be get in touch with you within 24 hours.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 16, offset: 4 }}>
                <Form form={form} onFinish={handleSendMessage}>
                  <FormItem
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                  >
                    <Input placeholder="Your Name" size="large" />
                  </FormItem>
                  <FormItem
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input placeholder="Your Email" size="large" />
                  </FormItem>
                  <FormItem
                    name="subject"
                    rules={[{ required: true, message: 'Please input your subject!' }]}
                  >
                    <Input placeholder="Your Subject" size="large" />
                  </FormItem>
                  <FormItem
                    name="message"
                    rules={[{ required: true, message: 'Please input your message!' }]}
                  >
                    <TextArea placeholder="Message" />
                  </FormItem>
                  <FormItem>
                    <Button type="primary" htmlType="submit" loading={submitting}>
                      Send Message
                    </Button>
                  </FormItem>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </Element>
      <GlobalFooter />
    </>
  )
}

export default connect(({ home, loading }) => ({
  submitting: loading.effects['home/sendMessage'],
}))(Home);
