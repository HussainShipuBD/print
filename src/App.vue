 <template>
  <div id="app">
    <div id="main-wrapper">
      <!-- Menu -->
      <div class="_1menu"  :class="(scrollY>98)? '_menu_fixed _menu': '_menu'">
        <div class="_1menu_con">
          <div class="_1menu_logo">
            <a href="">
              <img class="_1menu_logo_img" src="/static/img/logo.png" alt="Logo" title="">
            </a>
          </div>

          <div class="_product">
            <p class="_product_title">Product <Icon type="ios-arrow-down" /></p>

            <div class="_product_drop">
              <ul class="_product_drop_list">
                <!-- item -->
                <li v-for="(item,index) in 4" :key="index">
                  <a class="_product_drop_text" href="">Same Day Express Products <Icon type="ios-arrow-down" /></a>

                  <ul class="_product_subdrop">
                    <li>
                      <a class="_product_subdrop_text" href="">Same Day Express</a>
                    </li>
                    <li>
                      <a class="_product_subdrop_text" href="">Same Day Express</a>
                    </li>
                    <li>
                      <a class="_product_subdrop_text" href="">Same Day Express</a>
                    </li>
                    <li>
                      <a class="_product_subdrop_text" href="">Same Day Express</a>
                    </li>
                    <li>
                      <a class="_product_subdrop_text" href="">Same Day Express</a>
                    </li>
                  </ul>
                </li>
                <!-- item -->
              </ul>
            </div>
          </div>

          <div class="_1menu_list">
            <ul class="_1menu_list_ul">
              <li class="_1menu_list_item">
                <a href="" class="_1menu_list_text _active">Home</a>
              </li>
              <li class="_1menu_list_item">
                <a href="" class="_1menu_list_text">Contacts</a>
              </li>
              <li class="_1menu_list_item">
                <p class="_1menu_list_text">Contacts <span class="_1menu_list_text_icon"><Icon type="ios-arrow-down" /></span></p>

                <div class="_1dropdown">
                  <ul class="_1dropdown_list">
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item Two</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one three</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one  four</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="_1menu_list_item">
                <p class="_1menu_list_text">About us <span class="_1menu_list_text_icon"><Icon type="ios-arrow-down" /></span></p>

                <div class="_1dropdown">
                  <ul class="_1dropdown_list">
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item Two</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one three</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one  four</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="_1menu_list_item">
                <p class="_1menu_list_text">Category <span class="_1menu_list_text_icon"><Icon type="ios-arrow-down" /></span></p>

                <div class="_1dropdown">
                  <ul class="_1dropdown_list">
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item Two</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one three</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one  four</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="_1menu_list_item">
                <p class="_1menu_list_text">Blog <span class="_1menu_list_text_icon"><Icon type="ios-arrow-down" /></span></p>

                <div class="_1dropdown">
                  <ul class="_1dropdown_list">
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item Two</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one three</a>
                    </li>
                    <li>
                      <a class="_1dropdown_list_text" href="">Item one  four</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div class="_1menu_right">
            <ul class="_1menu_right_icon">
              <li><Icon type="ios-search" /></li>
              <li>
                <Icon type="ios-cart" />

                <!-- Dropdown -->
                <div class="_bas_drop">
                  <div class="_bas_drop_top">
                    <!-- Item -->
                    <div class="_bas_drop_card" v-for="(item, index) in 3" :key="index">
                      <div class="_bas_drop_card_left">
                        <p class="_bas_drop_card_title">Glued Presentation Folders</p>
                        <p class="_bas_drop_card_text">100, Oversized A4 Glued Presentation Folder, Single Sided, 350gsm Silk, Flat, Matt Lamination Front & Back, Glued Folder, None, N/A</p>
                      </div>

                      <div class="_bas_drop_card_right">
                        <h1 class="_bas_drop_card_price">£130.75</h1>

                        <p class="_bas_drop_card_close"><Icon type="close"></Icon></p>
                      </div>
                    </div>
                    <!-- Item -->
                  </div>

                  <div class="_bas_drop_bottom">
                    <div class="_bas_drop_bottom_left">
                      <p class="_bas_drop_bottom_p">Sub Total <span>: £217.92</span></p>
                      <p class="_bas_drop_bottom_p">Delivery <span>: £00.92</span></p>
                      <p class="_bas_drop_bottom_p">VAT <span>: £45.92</span></p>
                      <p class="_bas_drop_bottom_p">Total (inc.VAT) <span>: £244.92</span></p>
                    </div>

                    <div class="_bas_drop_bottom_right">
                      <button class="_1btn">Basket</button>
                    </div>
                  </div>
                </div>
                <!-- Dropdown -->
              </li>
            </ul>

            <ul style="display:none" class="_1menu_list_ul">
              <li class="_1menu_list_item">
                <router-link to="" class="_1menu_list_text">Login</router-link>
              </li>
              <li class="_1menu_list_item">
                <router-link to="" class="_1menu_list_text">Sign Up</router-link>
              </li>
            </ul>
          </div>

          <!-- Mobile button -->
          <div @click="isMobileMenu = true" class="_1menu_button"><Icon type="md-list" /></div>
          <!-- Mobile button -->
        </div>
      </div>
      <!-- Menu -->

      <!-- Mobile menu -->
      <div :class="[(isMobileMenu? '_mob_menu _mob_menu_open':'_mob_menu')]">
        <p @click="isMobileMenu = false" class="_mob_menu_close"><Icon type="md-close" /></p>

        <div class="_1menu_list">
          <ul class="_1menu_list_ul">
            <li class="_1menu_list_item">
              <a href="" class="_1menu_list_text _active">Home</a>
            </li>
            <li class="_1menu_list_item">
              <a href="" class="_1menu_list_text">Contacts</a>
            </li>
            <li class="_1menu_list_item">
              <p class="_1menu_list_text">Contacts <span class="_1menu_list_text_icon"><Icon type="ios-arrow-down" /></span></p>

              <div class="_1dropdown">
                <ul class="_1dropdown_list">
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item Two</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one three</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one  four</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="_1menu_list_item">
              <p class="_1menu_list_text">About us <span class="_1menu_list_text_icon"><Icon type="ios-arrow-down" /></span></p>

              <div class="_1dropdown">
                <ul class="_1dropdown_list">
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item Two</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one three</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one  four</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="_1menu_list_item">
              <p class="_1menu_list_text">Category <span class="_1menu_list_text_icon"><Icon type="ios-arrow-down" /></span></p>

              <div class="_1dropdown">
                <ul class="_1dropdown_list">
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item Two</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one three</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one  four</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="_1menu_list_item">
              <p class="_1menu_list_text">Blog <span class="_1menu_list_text_icon"><Icon type="ios-arrow-down" /></span></p>

              <div class="_1dropdown">
                <ul class="_1dropdown_list">
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item Two</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one three</a>
                  </li>
                  <li>
                    <a class="_1dropdown_list_text" href="">Item one  four</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div class="_1menu_right">
          <ul class="_1menu_right_icon">
            <li><Icon type="ios-search" /></li>
            <li><Icon type="ios-cart" /></li>
          </ul>

          <ul style="display:none" class="_1menu_list_ul">
            <li class="_1menu_list_item">
              <router-link to="" class="_1menu_list_text">Login</router-link>
            </li>
            <li class="_1menu_list_item">
              <router-link to="" class="_1menu_list_text">Sign Up</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- Mobile menu -->

      <div class="_main_layout">
        <router-view></router-view>
      </div>

      <!-- Footer -->
      <div class="_1footer" v-if="$router.path !== 'search'">
      <!-- <div class="_1footer"> -->
        <div class="container">
          <div class="_1footer_top">
            <div class="row">
              <div class="col-6 col-md">
                <h2 class="_1footer_title">Support</h2>

                <ul class="_1footer_list">
                  <li>
                    <a href="">Help Center</a>
                  </li>
                  <li>
                    <a href="">Covid 19 Safety</a>
                  </li>
                  <li>
                    <a href="">Country</a>
                  </li>
                  <li>
                    <a href="">Regions</a>
                  </li>
                  <li>
                    <a href="">Cites</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h2 class="_1footer_title">About Us</h2>

                <ul class="_1footer_list">
                  <li>
                    <a href="">About Company</a>
                  </li>
                  <li>
                    <a href="">Career</a>
                  </li>
                  <li>
                    <a href="">Commnuity</a>
                  </li>
                  <li>
                    <a href="">Investors</a>
                  </li>
                </ul>
              </div>
              <div class="col-4 col-md">
                <h2 class="_1footer_title">Booking</h2>

                <ul class="_1footer_list">
                  <li>
                    <a href="">Booking</a>
                  </li>
                  <li>
                    <a href="">Terms</a>
                  </li>
                  <li>
                    <a href="">Rerort Concern</a>
                  </li>
                </ul>
              </div>

              <div class="col-8 col-md-4 col-lg-4">
                <h2 class="_1footer_title">Newsletter</h2>

                <p class="_1footer_text">Lörem ipsum sägt vast därför att antining intrast. Kron kan divis berar honist trarar.</p>

                <div class="_1footer_input">
                  <input class="_1footer_int" placeholder="Enter Email Address">

                  <button class="_1footer_button"><Icon type="md-send" /></button>
                </div>
              </div>
            </div>
          </div>

          <div class="_1footer_bottom">
            <p class="_1footer_copy">Copyright 2022 baywatch.com . Design by Minhajul Abeeden</p>

            <ul class="_1footer_social">
              <li>
                <a href=""><Icon type="logo-facebook" /></a>
              </li>
              <li>
                <a href=""><Icon type="logo-linkedin" /></a>
              </li>
              <li>
                <a href=""><Icon type="logo-youtube" /></a>
              </li>
              <li>
                <a href=""><Icon type="logo-googleplus" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div> 
      <!-- Footer -->
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            isMobileMenu: false,
            scrollY: 0,
        }
    },
    methods:{
        handleScroll(){
            this.scrollY = window.scrollY
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },
}
</script>