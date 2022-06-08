<template>
    <div>
        <div class="_1content">
            <div class="container">
                <div class="_setting">
                    <div class="_setting_item">
                        <div class="_setting_top">
                            <p class="_setting_item_title">Account Settings</p>

                            <ul class="_setting_icon_list">
                                <template v-if="isEdit">
                                    <li @click="isEdit == true">Edit</li>
                                    <li>Update password</li>
                                </template>

                                <li v-else @click="isEdit = false">Cencel</li>
                            </ul>
                        </div>
                        
                        <div v-if="isEdit" class="_setting_details">
                            <div class="_setting_details_item">
                                <p class="_setting_details_title">First Name</p>
                                <p class="_setting_details_val">: The Printing</p>
                            </div>
                            <div class="_setting_details_item">
                                <p class="_setting_details_title">Last Name</p>
                                <p class="_setting_details_val">: Place</p>
                            </div>
                            <div class="_setting_details_item">
                                <p class="_setting_details_title">Your Email Address</p>
                                <p class="_setting_details_val">:   info@theprintingplace.co.uk</p>
                            </div>
                            <div class="_setting_details_item">
                                <p class="_setting_details_title">Telephone</p>
                                <p class="_setting_details_val">: 07506151741</p>
                            </div>
                        </div>

                        <div v-else class="_setting_details">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="First name" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="Last name" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="Email" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="Phone" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-12 col-lg-12">
                                    <div class="">
                                        <button class="_1btn" type="button">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="_setting_item">
                        <div class="_setting_top">
                            <p class="_setting_item_title">Billing Details</p>

                            <ul class="_setting_icon_list">
                                <template v-if="isEdit">
                                    <li @click="isEdit = true">Edit</li>
                                </template>

                                <li v-else @click="isEdit = false">Cencel</li>
                            </ul>
                        </div>
                        
                        <div v-if="isEdit" class="_setting_details">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_setting_details_item">
                                        <p class="_setting_details_title">First Name</p>
                                        <p class="_setting_details_val">: The Printing</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_setting_details_item">
                                        <p class="_setting_details_title">Last Name</p>
                                        <p class="_setting_details_val">: Place</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_setting_details_item">
                                        <p class="_setting_details_title">Your Email Address</p>
                                        <p class="_setting_details_val">:   info@theprintingplace.co.uk</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_setting_details_item">
                                        <p class="_setting_details_title">Telephone</p>
                                        <p class="_setting_details_val">: 07506151741</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else class="_setting_details">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="First name" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="Last name" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="Email" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="Phone" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-12 col-lg-12">
                                    <div class="">
                                        <button class="_1btn" type="button">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="_setting_item">
                        <div class="_setting_top">
                            <p class="_setting_item_title">Company Details</p>

                            <ul class="_setting_icon_list">
                                <template v-if="isEdit">
                                    <li @click="isEdit = true">Edit</li>
                                </template>

                                <li v-else @click="isEdit = false">Cencel</li>
                            </ul>
                        </div>
                        
                        <div v-if="isEdit" class="_setting_details">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_setting_details_item">
                                        <p class="_setting_details_title">First Name</p>
                                        <p class="_setting_details_val">: The Printing</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_setting_details_item">
                                        <p class="_setting_details_title">Last Name</p>
                                        <p class="_setting_details_val">: Place</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_setting_details_item">
                                        <p class="_setting_details_title">Your Email Address</p>
                                        <p class="_setting_details_val">:   info@theprintingplace.co.uk</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_setting_details_item">
                                        <p class="_setting_details_title">Telephone</p>
                                        <p class="_setting_details_val">: 07506151741</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else class="_setting_details">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="First name" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="Last name" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="Email" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_1group">
                                        <input class="_1input" placeholder="Phone" type="text">
                                    </div>
                                </div>
                                <div class="col-12 col-md-12 col-lg-12">
                                    <div class="">
                                        <button class="_1btn" type="button">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="_setting_item">
                        <div class="_setting_top">
                            <p class="_setting_item_title">My Cards</p>
                        </div>

                        <div class="_my_card_main">
                            <div class="_my_card">
                                <p class="_my_card_text">S SIDDIQUE</p>
                                <p class="_my_card_text">5803</p>
                                <p class="_my_card_text">11/22</p>
                                <p class="_my_card_text">Remove Card</p>
                            </div>
                            <div class="_my_card">
                                <p class="_my_card_text">S SIDDIQUE</p>
                                <p class="_my_card_text">5803</p>
                                <p class="_my_card_text">11/22</p>
                                <p class="_my_card_text">Remove Card</p>
                            </div>
                            <div class="_my_card">
                                <p class="_my_card_text">S SIDDIQUE</p>
                                <p class="_my_card_text">5803</p>
                                <p class="_my_card_text">11/22</p>
                                <p class="_my_card_text">Remove Card</p>
                            </div>
                        </div>
                    </div>

                    <div class="_setting_item">
                        <div class="_setting_top">
                            <p class="_setting_item_title">Marketing Preferences</p>
                        </div>

                        <router-link to="/preferences" class="_update_pre">Update my marketing preferences</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      isEdit:true
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>