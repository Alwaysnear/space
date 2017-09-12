//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite {

    public constructor() {
        super();
        this.createView();
    }
    private loadingbg;
    private textField:egret.TextField;
    private loading;
    private createView():void {
        // this.loading = new Loading();
        // this.addChild(this.loading)
        this.textField = new egret.TextField();
        
        // this.textField.x = 120
        this.textField.y = 545;
        this.textField.width = 650;
        this.textField.height = 100;
        this.textField.textColor = 0xF25757;
        this.textField.textAlign = "center";
        //加载loading背景
        var imgLoader:egret.ImageLoader = new egret.ImageLoader;
            imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this ); 
            imgLoader.load( "resource/assets/feiji/loadingbg.png" );
            
          
            
    }
            imgLoadHandler( evt:egret.Event ):void{
            var loader:egret.ImageLoader = evt.currentTarget;
            var bmd:egret.BitmapData = loader.data;
            var bmp:egret.Bitmap = new egret.Bitmap( bmd );
            this.addChild(bmp);
              this.addChild(this.textField);
}

    public setProgress(current:number, total:number):void {
        this.textField.text = `${Math.floor((current/total)*100)}%`;
    }
}
