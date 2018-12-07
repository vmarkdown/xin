<template>

    <div class="window main-window">

        <popover name="heading" :width="50" ref="popover_heading">
            <ul class="toolbar-heading list-group">
                <li class="list-group-item" v-for="level in [1,2,3,4,5,6]" @click="execCommand('heading', {level});closePopover('popover_heading');" v-text="'H'+level"></li>
            </ul>
        </popover>

        <popover name="code" :width="100" ref="popover_code">
            <ul class="toolbar-heading list-group">
                <li class="list-group-item" @click="execCommand('inlineCode');closePopover('popover_code');">
                    Code
                </li>
                <li class="list-group-item" @click="execCommand('code');closePopover('popover_code');">
                    Code Fences
                </li>
            </ul>
        </popover>

        <!-- .toolbar-header sits at the top of your app -->
        <header class="toolbar toolbar-header">
            <template v-if="PLATFORM_ENV === 'electron'">
                <h1 class="title">xin markdown editor</h1>
            </template>
            <template v-else>
                <div style="height: 5px;"></div>
            </template>

            <div class="toolbar-actions">
                <div class="btn-group" v-show="(viewStatus === VIEW_STATUS.ALL)||(viewStatus === VIEW_STATUS.EDITOR)">

                    <button class="btn btn-default" v-popover.bottom="{ name: 'heading' }">
                        <span class="icon">H</span>
                    </button>

                    <button class="btn btn-default" @click="execCommand('strong')">
                        <span class="icon">B</span>
                    </button>

                    <button class="btn btn-default" >
                        <span class="icon"><em>I</em></span>
                    </button>

                    <!--<button class="btn btn-default">-->
                        <!--<span class="icon" style="text-decoration: underline">U</span>-->
                    <!--</button>-->

                    <button class="btn btn-default" @click="execCommand('delete')">
                        <span class="icon" style="text-decoration: line-through">S</span>
                    </button>

                    <button class="btn btn-default" @click="execCommand('thematicBreak')">
                        <span class="icon">一</span>
                    </button>

                    <button class="btn btn-default" @click="execCommand('blockquote')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M14.446,18.235l2.92,0l1.946,-4.988l0,-7.482l-5.839,0l0,7.482l2.92,0m-10.732,4.988l2.919,0l1.947,-4.988l0,-7.482l-5.839,0l0,7.482l2.919,0l-1.946,4.988Z" style="fill-rule: nonzero;"></path></svg>
                    </button>

                    <button class="btn btn-default" @click="execCommand('list')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M7.043,4.695l14.61,0l0,2.087l-14.61,0l0,-2.087m0,8.349l0,-2.088l14.61,0l0,2.088l-14.61,0m-3.131,-8.871c0.866,0 1.566,0.699 1.566,1.565c0,0.867 -0.7,1.566 -1.566,1.566c-0.866,0 -1.565,-0.699 -1.565,-1.566c0,-0.866 0.699,-1.565 1.565,-1.565m0,6.262c0.866,0 1.566,0.699 1.566,1.565c0,0.866 -0.7,1.565 -1.566,1.565c-0.866,0 -1.565,-0.699 -1.565,-1.565c0,-0.866 0.699,-1.565 1.565,-1.565m3.131,8.87l0,-2.087l14.61,0l0,2.087l-14.61,0m-3.131,-2.609c0.866,0 1.566,0.699 1.566,1.566c0,0.866 -0.7,1.565 -1.566,1.565c-0.866,0 -1.565,-0.699 -1.565,-1.565c0,-0.867 0.699,-1.566 1.565,-1.566Z" style="fill-rule: nonzero;"></path></svg>
                    </button>


                    <button class="btn btn-default" @click="execCommand('list', {ordered:true})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M7.235,13.059l14.825,0l0,-2.118l-14.825,0m0,8.471l14.825,0l0,-2.117l-14.825,0m0,-10.59l14.825,0l0,-2.117l-14.825,0m-5.295,6.353l1.906,0l-1.906,2.224l0,0.953l3.177,0l0,-1.059l-1.906,0l1.906,-2.224l0,-0.953l-3.177,0m1.059,-2.118l1.059,0l0,-4.235l-2.118,0l0,1.059l1.059,0m-1.059,12.707l2.118,0l0,0.529l-1.059,0l0,1.059l1.059,0l0,0.529l-2.118,0l0,1.059l3.177,0l0,-4.235l-3.177,0l0,1.059Z" style="fill-rule: nonzero;"></path></svg>
                    </button>

                    <button class="btn btn-default" @click="execCommand('list', {checked:true})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z"></path></svg>
                    </button>

                    <button class="btn btn-default" v-popover.bottom="{ name: 'code' }">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" class="icon"><path d="M 14.6,16.6L 19.2,12L 14.6,7.4L 16,6L 22,12L 16,18L 14.6,16.6 Z M 9.4,16.6L 4.8,12L 9.4,7.4L 8,6L 2,12L 8,18L 9.4,16.6 Z "></path></svg>
                    </button>

                    <button class="btn btn-default" @click="execCommand('table')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 5,4L 19,4C 20.1046,4 21,4.89543 21,6L 21,18C 21,19.1046 20.1046,20 19,20L 5,20C 3.89543,20 3,19.1046 3,18L 3,6C 3,4.89543 3.89543,4 5,4 Z M 5,8L 5,12L 11,12L 11,8L 5,8 Z M 13,8L 13,12L 19,12L 19,8L 13,8 Z M 5,14L 5,18L 11,18L 11,14L 5,14 Z M 13,14L 13,18L 19,18L 19,14L 13,14 Z "></path></svg>
                    </button>

                    <button class="btn btn-default" @click="execCommand('link')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 10.5858,13.4142C 10.9763,13.8047 10.9763,14.4379 10.5858,14.8284C 10.1952,15.2189 9.56207,15.2189 9.17154,14.8284C 7.21892,12.8758 7.21892,9.70995 9.17154,7.75733L 9.17157,7.75736L 12.707,4.2219C 14.6596,2.26928 17.8255,2.26929 19.7781,4.2219C 21.7307,6.17452 21.7307,9.34034 19.7781,11.293L 18.2925,12.7785C 18.3008,11.9583 18.1659,11.1368 17.8876,10.355L 18.3639,9.87865C 19.5355,8.70708 19.5355,6.80759 18.3639,5.63602C 17.1923,4.46445 15.2929,4.46445 14.1213,5.63602L 10.5858,9.17155C 9.41419,10.3431 9.41419,12.2426 10.5858,13.4142 Z M 13.4142,9.17155C 13.8047,8.78103 14.4379,8.78103 14.8284,9.17155C 16.781,11.1242 16.781,14.29 14.8284,16.2426L 14.8284,16.2426L 11.2929,19.7782C 9.34026,21.7308 6.17444,21.7308 4.22182,19.7782C 2.26921,17.8255 2.2692,14.6597 4.22182,12.7071L 5.70744,11.2215C 5.69913,12.0417 5.8341,12.8631 6.11234,13.645L 5.63601,14.1213C 4.46444,15.2929 4.46444,17.1924 5.63601,18.3639C 6.80758,19.5355 8.70708,19.5355 9.87865,18.3639L 13.4142,14.8284C 14.5858,13.6568 14.5858,11.7573 13.4142,10.5858C 13.0237,10.1952 13.0237,9.56207 13.4142,9.17155 Z "></path></svg>
                    </button>

                    <button class="btn btn-default" @click="execCommand('image')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 12.9994,8.99807L 18.4994,8.99807L 12.9994,3.49807L 12.9994,8.99807 Z M 5.99938,1.99809L 13.9994,1.99809L 19.9994,7.99808L 19.9994,19.9981C 19.9994,21.1021 19.1034,21.9981 17.9994,21.9981L 5.98937,21.9981C 4.88537,21.9981 3.99939,21.1021 3.99939,19.9981L 4.0094,3.99808C 4.0094,2.89407 4.89437,1.99809 5.99938,1.99809 Z M 6,20L 15,20L 18,20L 18,12L 14,16L 12,14L 6,20 Z M 8,9C 6.89543,9 6,9.89543 6,11C 6,12.1046 6.89543,13 8,13C 9.10457,13 10,12.1046 10,11C 10,9.89543 9.10457,9 8,9 Z "></path></svg>
                    </button>

                </div>


                <button class="btn btn-default pull-right" @click="switchView">

                    <span class="icon icon-eye" v-show="(viewStatus === VIEW_STATUS.ALL)||(viewStatus === VIEW_STATUS.EDITOR)"></span>
                    <span class="icon icon-pencil" v-show="viewStatus === VIEW_STATUS.PREVIEW"></span>


                </button>
            </div>


        </header>

        <!-- Your app's content goes inside .window-content -->
        <div class="window-content">
            <div class="pane-group">
                <div class="pane" v-show="(viewStatus === VIEW_STATUS.ALL)||(viewStatus === VIEW_STATUS.EDITOR)">
                    <iframe class="panel" frameborder="0" :src="editorUrl"></iframe>
                </div>
                <div class="pane" v-show="(viewStatus === VIEW_STATUS.ALL)||(viewStatus === VIEW_STATUS.PREVIEW)">
                    <iframe class="panel" frameborder="0" :src="previewUrl"></iframe>
                </div>
            </div>
        </div>

        <!--<footer class="toolbar toolbar-footer">-->
        <!--</footer>-->
    </div>

</template>

<script>

    const VIEW_STATUS = {
        ALL: 0,
        PREVIEW: 1,
        EDITOR: 2,
    };

    export default {
        props:{
            editorUrl:{
                type: String,
                default: 'editor.html'
            },
            previewUrl:{
                type: String,
                default: 'preview.html'
            }
        },
        data () {
            return {
                VIEW_STATUS: VIEW_STATUS,
                viewStatus: VIEW_STATUS.ALL,
                msg: 'Hello world!',
                PLATFORM_ENV: process.env.PLATFORM_ENV || 'browser'
            }
        },
        methods:{
            switchView() {
                this.viewStatus = (this.viewStatus+1)%2;
            },
            execCommand(name, options) {
                this.$store.$emit('execCommand', {
                    name, options
                });
            },
            closePopover(name) {
                const popover = this.$refs[name];
                popover && (popover.visible = false);
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    .main-window {
        .pane {
            overflow-y: hidden;
        }
    }

    .vue-popover.dropdown-position-bottom:before{
        border-bottom: transparent;
    }

    .toolbar-heading{
        padding-left: 0;
        list-style-type: none;
        .list-group-item {
            text-align: center;
            padding: 5px 5px 5px 5px;
            cursor: pointer;
        }
        .list-group-item:hover{
            background-color: #d7d4f0;
        }
    }

    div[data-popover="heading"] {
        margin-top: -5px;
        margin-left: 10px;
    }


</style>
